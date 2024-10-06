"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { ChangePasswordDialog } from "@/components/dialogs/change-password-dialog";
import { AvatarDropdown } from "@/components/dropdowns/avatar-dropdown";

interface HeaderProps {
  toggleSidebar: () => void;
}

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "John Doe",
    title: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Changing password to:", newPassword);
      setIsChangePasswordOpen(false);
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-4 h-10 w-10">
              <MenuIcon className="h-6 w-6" />
            </Button>
            <span className="text-2xl font-bold text-foreground">Portdash</span>
          </div>
          <div className="flex items-center">
            <AvatarDropdown
              personalInfo={personalInfo}
              onEditProfile={() => setIsEditProfileOpen(true)}
              onChangePassword={() => setIsChangePasswordOpen(true)}
            />
          </div>
        </div>
      </div>
      <ChangePasswordDialog
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        setNewPassword={setNewPassword}
        setConfirmPassword={setConfirmPassword}
        handleChangePassword={handleChangePassword}
      />
    </header>
  );
}
