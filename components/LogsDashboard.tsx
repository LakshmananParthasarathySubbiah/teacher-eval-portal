export default function LogsDashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Recent AI Evaluations</h2>
      <ul className="divide-y divide-gray-100 text-sm text-gray-600">
        <li className="py-3">Evaluated 22BCE1001 for Data Structures - 85/100</li>
        <li className="py-3">Evaluated 22BCE1002 for Data Structures - 92/100</li>
      </ul>
    </div>
  );
}