import { Header } from "@widgets/header";

import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="container flex min-h-svh flex-col">
      <Header />
      <div className="grow">{children}</div>
    </div>
  );
}
