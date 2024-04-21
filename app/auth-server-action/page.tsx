import React from "react";
import { AuthForm } from "./components/AuthForm";

import { redirect } from "next/navigation";
import { readUserData } from "@/lib/actions";

export default async function page() {
  const { data } = await readUserData();

  if (data.session) {
    return redirect("/todo");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <AuthForm />
      </div>
    </div>
  );
}
