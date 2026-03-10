"use client";

import { Student } from "@/types";

interface StudentTableProps {
  students: Student[];
  onSelect: (student: Student) => void;
  selectedId?: string;
  onAddStudent?: (student: Omit<Student, "id" | "status">) => void;
  onUploadClick?: (student: Student) => void; // New prop
}

export default function StudentTable({ 
  students, 
  onSelect, 
  selectedId,
  onAddStudent,
  onUploadClick 
}: StudentTableProps) {
  return (
    <div className="overflow-y-auto max-h-[600px] border rounded-lg">
      <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        <h3 className="font-medium">Student List ({students.length})</h3>
        {onAddStudent && (
          <button
            onClick={() => onAddStudent?.({
              name: "",
              regNo: "",
              email: "",
              section: "",
              scriptUrl: "",
            })}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            + Add Student
          </button>
        )}
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th className="px-4 py-3 font-medium text-gray-500">Reg No</th>
            <th className="px-4 py-3 font-medium text-gray-500">Name</th>
            <th className="px-4 py-3 font-medium text-gray-500">Status</th>
            {onUploadClick && <th className="px-4 py-3 font-medium text-gray-500">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {students.map((student) => (
            <tr 
              key={student.id} 
              onClick={() => onSelect(student)}
              className={`cursor-pointer transition ${
                selectedId === student.id ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
              }`}
            >
              <td className="px-4 py-3 font-medium text-gray-900">{student.regNo}</td>
              <td className="px-4 py-3 text-gray-700">{student.name}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  student.status === "Evaluated" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {student.status}
                </span>
              </td>
              {onUploadClick && (
                <td className="px-4 py-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUploadClick(student);
                    }}
                    className="text-xs text-green-600 hover:text-green-800 font-medium"
                  >
                    Upload PDF
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}