'use client';

import { useFormStatus } from "react-dom";

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  return (
    <form className="flex flex-col gap-4 p-8">
      <div>
        <label className="text-black">name</label>
        <input id="name" name="name" />
      </div>

      <div>
        <label className="text-black" htmlFor="email">
          email
        </label>
        <input className="border-blue-600" id="email" name="email" />
      </div>

      <div>
        <label className="text-black">password</label>
        <input id="password" name="password" />
      </div>
      <button type="submit" aria-disabled={pending} className="w-full mt-2">
        submit
      </button>
    </form>
  );
};
