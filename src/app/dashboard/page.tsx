"use client";

import { ChangeEvent, useState } from "react";


export default function Dashboard() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  function handleInfoChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
