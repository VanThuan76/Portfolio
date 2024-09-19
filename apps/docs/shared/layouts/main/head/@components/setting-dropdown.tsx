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
  DialogContent,
  DialogTrigger,
} from "@ui/molecules/modals/dialog";
import { Avatar, AvatarImage } from "@ui/molecules/ui-elements/avatar";

const SettingDropdown = () => {
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </DialogTrigger>
          <DialogContent>
            <h1>Hi</h1>
          </DialogContent>
        </Dialog>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingDropdown;
