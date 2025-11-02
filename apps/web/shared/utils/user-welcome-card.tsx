"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { m, AnimatePresence } from "framer-motion";

import { useUser } from "@repo/hooks";
import { IUserMetadata } from "@repo/supabase/queries/types/user";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/design-system/components/molecules/ui-elements/avatar";
import { cn } from "@repo/design-system/utils/tw";

export default function UserWelcomeCard() {
  const t = useTranslations("pages.auth");
  const { data: user } = useUser();
  const [showCard, setShowCard] = useState(false);
  const [userMetadata, setUserMetadata] = useState<IUserMetadata | null>(null);
  const [mounted, setMounted] = useState(false);
  const prevUserIdRef = useRef<string | null>(null);
  const hasShownRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track when user logs in (transitions from no user to having user)
  useEffect(() => {
    if (!mounted || !user?.id) return;

    const currentUserId = user.id;
    const prevUserId = prevUserIdRef.current;

    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem(
      `welcome_shown_${currentUserId}`,
    );

    // Only show if: went from null/undefined to having userId AND haven't shown this session yet
    if (!prevUserId && currentUserId && !alreadyShown) {
      // Parse user metadata if available
      try {
        if (user.user_metadata) {
          const metadata =
            typeof user.user_metadata === "string"
              ? JSON.parse(user.user_metadata)
              : user.user_metadata;
          setUserMetadata(metadata);
        }
      } catch (error) {
        console.error("Error parsing user metadata:", error);
      }

      setShowCard(true);
      hasShownRef.current = true;

      // Mark as shown in session storage
      sessionStorage.setItem(`welcome_shown_${currentUserId}`, "true");

      // Update previous user ID
      prevUserIdRef.current = currentUserId;
    } else if (prevUserId === null && currentUserId) {
      // Initialize previous user ID on first mount
      prevUserIdRef.current = currentUserId;
    }
  }, [user?.id, mounted, user]);

  const handleClose = () => {
    setShowCard(false);
  };

  // Lấy avatar và tên từ user metadata hoặc user object
  const avatarUrl = userMetadata?.avatar_url || user?.user_metadata?.avatar_url;
  const userName =
    userMetadata?.full_name ||
    userMetadata?.name ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";

  if (!mounted || !showCard) {
    return null;
  }

  const cardContent = (
    <AnimatePresence>
      {showCard && (
        <m.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999999] pointer-events-auto max-w-[calc(100vw-2rem)] md:max-w-none"
        >
          <div
            className={cn(
              "relative flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg shadow-lg border",
              "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
              "backdrop-blur-sm",
            )}
          >
            <Avatar className="h-10 w-10 md:h-12 md:w-12">
              <AvatarImage src={avatarUrl} alt={userName} />
              <AvatarFallback className="bg-indigo-500 text-white">
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0 flex-1">
              <p className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                {t("login_success")}
              </p>
              <p className="text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 truncate">
                {userName}
              </p>
            </div>
            <button
              onClick={handleClose}
              className={cn(
                "ml-1 md:ml-2 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800",
                "transition-colors duration-200",
                "flex-shrink-0",
              )}
              aria-label="Close"
            >
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-500 dark:text-zinc-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );

  // Sử dụng portal để render ra ngoài DOM tree, tránh bị ảnh hưởng bởi stacking context
  if (typeof window !== "undefined" && document.body) {
    return createPortal(cardContent, document.body);
  }

  return cardContent;
}
