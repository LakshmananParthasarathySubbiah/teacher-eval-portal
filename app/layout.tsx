import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";

export const metadata = {
  title: "Teacher Evaluation Portal",
  description: "AI-assisted grading for exams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}