import { getSession } from "@/src/lib/session";
import Link from "next/link";

const SignButtons = async () => {
  const session = await getSession();

  return (
    <div className="flex gap-4">
      {!session || !session?.user ? (
        <>
          <Link href="/auth/signin">Sign In</Link>
          <Link href="/auth/signup">Sign Up</Link>
        </>
      ) : (
        <>
          <p> {session.user.name}</p>
          <Link href="/api/auth/signout">Sign out</Link>
        </>
      )}
    </div>
  );
};

export default SignButtons;
