import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <div className="bg-gradient-to-br flex items-center justify-center from-lime-400 h-screen">{children}</div>;
}
