import React from "react";
import "#/globals.css";
import RegistrationForm from "@/Components/UI/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
