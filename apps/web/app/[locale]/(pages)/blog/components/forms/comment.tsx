"use client";

import dynamic from "next/dynamic";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import { queryClient } from "@providers/react-query";

import { cn } from "@repo/design-system/utils/tw";
import { getTodayFormatted } from "@/shared/helpers/get-time";
import { createComment } from "@repo/supabase/queries";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { useModal, useUser } from "@repo/hooks";

import { ICreateComment } from "@repo/supabase/queries/types/comment";

import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@repo/design-system/components/organisms/forms/form";
import { Form } from "@repo/design-system/components/organisms/forms/form";
import { Button } from "@repo/design-system/components/atoms/button";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

const PlateEditor = dynamic(() => import("@repo/editor/index"), {
    ssr: false,
    loading: () => <Skeleton className="w-full min-h-[300px]" />,
});

interface Props {
    blogId: string;
    slug: string;
    refetch?: () => void;
    orderComment?: number;
    commentParentId?: string | null;
    isReplyComment?: boolean;
    toggleReplyForm?: () => void;
    isCommentEditor?: boolean;
}

const commentCreateSchema = z.object({
    content: z.array(z.any()),
});

const CommentForm = ({
    slug,
    blogId,
    refetch,
    commentParentId,
    orderComment,
    isReplyComment = false,
    toggleReplyForm,
    isCommentEditor = false,
}: Props) => {
    const t = useTranslations("pages.blog");
    const locale = useLocale();
    const supabase = useSupabaseBrowser();

    const form = useForm<z.infer<typeof commentCreateSchema>>({
        resolver: zodResolver(commentCreateSchema),
        defaultValues: {},
    });

    const [isDiscuss, setIsDiscuss] = useState(false);

    const { onOpen } = useModal();
    const { data: user } = useUser();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit: SubmitHandler<{ content: any }> = async (data) => {
        if (!user) return;

        const body: ICreateComment =
            isReplyComment && commentParentId
                ? {
                    parent_id: commentParentId as string,
                    blog_id: blogId,
                    user_id: user?.id,
                    content: data.content,
                    order: orderComment ?? 1,
                }
                : {
                    parent_id: null,
                    user_id: user?.id,
                    blog_id: blogId,
                    content: data.content,
                    order: 0,
                };

        addNewComment(body);
    };

    const { mutate: addNewComment } = useMutation<any, Error, ICreateComment>({
        mutationFn: async (variables) => {
            if (!executeRecaptcha) {
                return;
            }
            return await executeRecaptcha("creatComment").then((gReCaptchaToken) => {
                createComment(supabase, variables, gReCaptchaToken);
            });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["article", slug, locale],
            });
            refetch && refetch();
            toggleReplyForm;
            setIsDiscuss(false);
            form.reset();
            toast(t("notify_create_comment"), {
                description: getTodayFormatted(locale),
            });
        },
    });

    const handleDiscussion = () => {
        if (user && user?.id) {
            setIsDiscuss(true);
        } else {
            onOpen("auth", "blog");
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                onError={(e) => {
                    new Error(`Error ${e}`);
                }}
                className="relative flex flex-col items-center justify-center w-full gap-5"
            >
                <div className="flex items-start justify-center w-full h-full gap-2">
                    <LoaderImage
                        isLoader={false}
                        src={
                            user?.user_metadata?.avatar_url ?? "/images/blog/anonymous.png"
                        }
                        width={32}
                        height={32}
                        alt="@avatar"
                        className="flex-shrink-0 overflow-hidden rounded-full"
                    />
                    <AnimatePresence mode="wait">
                        {isDiscuss ? (
                            <m.div
                                layout
                                key="comment-editor"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full overflow-hidden"
                            >
                                <FormField
                                    control={form?.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem
                                            className={cn(
                                                isReplyComment
                                                    ? "max-w-[500px]"
                                                    : "max-w-[calc(100vw-32px)] sm:max-w-[min(calc(100vw-64px),1336px)]",
                                            )}
                                        >
                                            <FormControl>
                                                <PlateEditor
                                                    {...field}
                                                    onChange={(editor) => {
                                                        field.onChange(editor.value);
                                                    }}
                                                    value={field.value || []}
                                                    isCommentEditor={isCommentEditor}
                                                    className="w-full border rounded-md border-slate-300"
                                                    editorClassName={cn(
                                                        "h-[150px] max-h-[200px] !px-4",
                                                        isReplyComment ? "pb-4" : "",
                                                    )}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-start justify-start gap-1 mt-3">
                                    <Button type="submit">{t("submit")}</Button>
                                    {isReplyComment && (
                                        <Button type="button" onClick={toggleReplyForm}>
                                            {t("dismiss")}
                                        </Button>
                                    )}
                                </div>
                            </m.div>
                        ) : (
                            <m.div
                                layout
                                key="discussion-button"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="border border-slate-300 w-full rounded-md h-[150px] px-4 py-2"
                                onClick={handleDiscussion}
                            >
                                {t("add_to_the_discussion")}
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </Form>
    );
};

export default CommentForm;
