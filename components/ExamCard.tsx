import Link from "next/link";
import { Exam } from "@/types";

export default function ExamCard({ exam }: { exam: Exam }) {
  return (
    <Link href={`/exam/${exam.id}`}>
      <div className="border rounded-lg p-5 hover:shadow-lg transition bg-white cursor-pointer border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{exam.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
            {exam.type}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">Date: {exam.date}</p>
        <p className="text-sm text-gray-600 font-medium">{exam.studentCount} Students Enrolled</p>
      </div>
    </Link>
  );
}