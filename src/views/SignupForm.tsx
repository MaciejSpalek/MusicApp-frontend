"use client";

import { useFormStatus } from "react-dom";
import { singUp } from "../lib/auth";
import { useActionState } from "react";

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  const [state, action] = useActionState(singUp, undefined);

  return (
    <form className="flex flex-col gap-4" action={action}>
      {state?.message && <p className="text-red-500">{state.message}</p>}

      <div>
        <label className="text-black">name</label>
        <input id="name" name="name" />
      </div>
      {state?.error?.name && <p className="text-red-500">{state.error.name}</p>}

      <div>
        <label className="text-black" htmlFor="email">
          email
        </label>
        <input className="border-blue-600" id="email" name="email" />
      </div>
      {state?.error?.email && (
        <p className="text-red-500">{state.error.email}</p>
      )}

      <div>
        <label className="text-black">password</label>
        <input id="password" name="password" />
      </div>
      {state?.error?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.error.password.map((error) => (
              <li key={error}>
                <p className="text-red-500">{error}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit" aria-disabled={pending} className="bg-black text-white p-4 rounded-lg w-full mt-2">
        Sign Up
      </button>
    </form>
  );
};
