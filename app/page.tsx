import LogsDashboard from "@/components/LogsDashboard";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Welcome to EvalPortal</h1>
      <LogsDashboard />
    </div>
  );
}