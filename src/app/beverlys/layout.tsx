import BeverlysNavbar from "./components/BeverlysNavbar";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beverly's of Nashville | Wig Strategy",
  description: "Complete Interactive Brief for Beverly's of Nashville Wig Strategy",
};

export default function BeverlysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <BeverlysNavbar />
      {/* Side navigation lives on the left on desktop, in a drawer on mobile */}
      <Sidebar />
      {/* Content is pushed right on large screens to clear the fixed sidebar */}
      <div className="pt-20 lg:pl-72">
        {children}
      </div>
    </div>
  );
}
