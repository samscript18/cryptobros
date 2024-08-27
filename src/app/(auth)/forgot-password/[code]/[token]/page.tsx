"use client";

import { ButtonContained } from "@/components/ui/buttons";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { code, token } = useParams();
  const { push } = useRouter();

  const submit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
    }
    push("/login");
  };

  return (
    <div className="flex justify-center items-center px-6">
      <div className="sm:w-full md:w-[35vw] h-auto sm:mt-[50%] md:mt-[3.5rem] p-6 bg-white border border-gray-100 rounded-md shadow-md">
        <h2 className="text-blue-700 text-2xl font-bold">Reset Password</h2>
        <form onSubmit={submit} method="put">
          <div className="flex flex-col my-2">
            <label htmlFor="password" className="text-sm mt-3 mb-2">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password *"
              className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="confirmPassword" className="text-sm mt-3 mb-2">
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password *"
              className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
              required
            />
          </div>
          <ButtonContained className="mt-6">Submit</ButtonContained>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
