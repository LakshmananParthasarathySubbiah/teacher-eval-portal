import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-8 text-blue-400">EvalPortal AI</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-blue-300 transition">Dashboard</Link>
        <Link href="/courses" className="hover:text-blue-300 transition">Courses</Link>
        <Link href="/exams" className="hover:text-blue-300 transition">Exams</Link>
        <Link href="/students" className="hover:text-blue-300 transition">All Students</Link>
      </nav>
    </aside>
  );
}