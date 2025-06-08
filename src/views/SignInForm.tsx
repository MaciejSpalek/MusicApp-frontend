"use client";

import { useFormStatus } from "react-dom";
import { singIn } from "../lib/auth";
import { useActionState } from "react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

export const SignInForm = () => {
  const { pending } = useFormStatus();

  const [state, action] = useActionState(singIn, undefined);

  return (
    <form className="flex flex-col gap-4 w-full" action={action}>
      {state?.message && <p className="text-red-500">{state.message}</p>}

      <div className="w-full">
        <Label className="text-black" htmlFor="email">
          Email
        </Label>
        <Input className="h-12" id="email" name="email" />
      </div>
      {state?.error?.email && (
        <p className="text-red-500">{state.error.email}</p>
      )}

      <div>
        <Label className="text-black">Password</Label>
        <Input className="h-12" id="password" type="password" name="password" />
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

      <Button className="h-12 text-md" type="submit" aria-disabled={pending}>
        Log in
      </Button>
      <a
        className="flex justify-center border px-4 py-2 rounded bg-sky-600 text-white w-full"
        href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`}
      >
        Sign in with google
      </a>
    </form>
  );
};
