import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/sidebar/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //   // for sidebar grid
    <main dir="rtl" className="h-screen grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr]">
      {/* left side bar */}
      <div className="bg-zinc-100 dark:bg-zinc-800 shadow-sm">
        <Sidebar />
      </div>
      {/* right content */}
      <div className="bg-zinc-50 dark:bg-zinc-700">
        {/* navbar */}
        <Navbar />
        {children}
      </div>
    </main>
  );
}
