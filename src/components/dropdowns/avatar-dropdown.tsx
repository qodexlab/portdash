// AvatarDropdown.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, EditIcon, KeyIcon, LogOutIcon } from "lucide-react";

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

interface AvatarDropdownProps {
  personalInfo: PersonalInfo;
  onEditProfile: () => void;
  onChangePassword: () => void;
}

export const AvatarDropdown = ({
  personalInfo,
  onEditProfile,
  onChangePassword,
}: AvatarDropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="flex h-fit items-center space-x-2 p-0 hover:bg-background">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={personalInfo.name} />
          <AvatarFallback>
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span>{personalInfo.name}</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={onEditProfile}>
        <EditIcon className="mr-2 h-4 w-4" />
        <span>Edit Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onChangePassword}>
        <KeyIcon className="mr-2 h-4 w-4" />
        <span>Change Password</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOutIcon className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
