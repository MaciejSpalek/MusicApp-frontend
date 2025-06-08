import Link from "next/link";
import SignButtons from "../atoms/SignButtons";

const AppBar = async () => {
  return (
    <div className="p-8 shadow flex justify-between gap-3 bg-black text-white">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <SignButtons />
    </div>
  );
};

export default AppBar;
