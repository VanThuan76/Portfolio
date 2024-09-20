'use client'
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@ui/molecules/other-utils/dropdown-menu";
import {
    Dialog,
    DialogTrigger,
} from "@ui/molecules/modals/dialog";
import { Avatar, AvatarImage } from "@ui/molecules/ui-elements/avatar";

const SettingDropdown = () => {
    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="w-4 h-4 cursor-pointer">
                    <AvatarImage src="/logo.png" alt="@logo" sizes="sm" />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[9999]">
                <Dialog>
                    <DialogTrigger>
                        <DropdownMenuLabel>Austin Vu Web</DropdownMenuLabel>
                    </DialogTrigger>
                </Dialog>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => router.push("/setting")}>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SettingDropdown;
