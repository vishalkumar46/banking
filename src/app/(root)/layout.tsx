import MobileSideBar from "@/components/ui/MobileSideBar";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIN = { firstName: "Vishal", lastName: "Kumar" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIN} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Bank Logo" />
          <div>
            <MobileSideBar user={loggedIN} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
