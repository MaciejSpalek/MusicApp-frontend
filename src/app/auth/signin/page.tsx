import { SignInForm } from "@/src/views";

export default function SignInPage() {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg w-96 border-orange-400 w-100">
      <h1 className="text-black font-semibold text-xl">Sign In Page</h1>
      <SignInForm />
    </div>
  );
}
