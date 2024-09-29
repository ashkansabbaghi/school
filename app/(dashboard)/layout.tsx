import Sidebar from "@/components/sidebar/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //   // for sidebar grid
    <main dir="rtl" className="h-screen grid grid-cols-[80px_1fr] md:grid-cols-[250px_1fr]">
      {/* left side bar */}
      <div className="bg-slate-50 dark:bg-gray-100/10 shadow-sm">
        <Sidebar />
      </div>
      {/* right content */}
      <div className=" p-5">
        {children}
      </div>
    </main>
  );
}
