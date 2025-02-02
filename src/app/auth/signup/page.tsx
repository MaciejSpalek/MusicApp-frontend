import { SignUpForm } from "@/src/views";

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg w-96 border-orange-400 w-100">
      <h1 className="text-black font-semibold text-xl">Sign Up</h1>
      <SignUpForm />
    </div>
  );
}
