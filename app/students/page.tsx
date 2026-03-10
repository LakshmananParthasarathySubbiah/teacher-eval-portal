"use client";

import { useState, useEffect } from "react";
import { students as initialStudents, answerScripts as initialAnswerScripts } from "@/data/mockData";
import { Student, AnswerScript } from "@/types";
import AddStudentForm from "@/components/AddStudentForm";
import PDFUploadModal from "@/components/PDFUploadModal";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StudentsPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [answerScripts, setAnswerScripts] = useState<AnswerScript[]>(initialAnswerScripts);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploadingStudent, setUploadingStudent] = useState<Student | null>(null);

  // Filter students by course
  useEffect(() => {
    if (courseId) {
      setFilteredStudents(students.filter(s => s.courseId === courseId));
    } else {
      setFilteredStudents(students);
    }
  }, [courseId, students]);

  const handleAddStudent = (newStudent: Omit<Student, "id" | "status">) => {
    const student: Student = {
      ...newStudent,
      id: `s${students.length + 1}`,
      status: "Pending",
      scriptUrl: "",
      courseId: courseId || undefined,
    };
    setStudents([...students, student]);
    setShowAddForm(false);
  };

  const handleUploadPDF = (studentId: string, file: File, pdfUrl: string) => {
    // Update student's scriptUrl
    setStudents(prev =>
      prev.map(s =>
        s.id === studentId ? { ...s, scriptUrl: pdfUrl } : s
      )
    );

    // Create a new answer script entry
    const newScript: AnswerScript = {
      id: `as${answerScripts.length + 1}`,
      studentId,
      examId: "1", // You might want to pass examId from context; for now use a default or prompt
      pdfUrl,
      uploadedAt: new Date().toISOString(),
      status: "pending",
      fileName: file.name,
      fileSize: file.size,
    };
    setAnswerScripts(prev => [...prev, newScript]);

    // Optionally, you could also update the student's status or trigger a re-fetch
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Student Management</h1>
          {courseId && (
            <p className="text-sm text-gray-500 mt-1">Filtered by Course ID: {courseId}</p>
          )}
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <span>+</span> Add New Student
        </button>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reg No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.regNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.email || "—"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.section || "—"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === "Evaluated" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link
                    href={`/exam/${student.courseId}?studentId=${student.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    View Scripts
                  </Link>
                  <button
                    onClick={() => setUploadingStudent(student)}
                    className="text-green-600 hover:text-green-900"
                  >
                    Upload PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {showAddForm && (
        <AddStudentForm
          onAdd={handleAddStudent}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {/* PDF Upload Modal */}
      {uploadingStudent && (
        <PDFUploadModal
          student={uploadingStudent}
          onClose={() => setUploadingStudent(null)}
          onUpload={handleUploadPDF}
        />
      )}
    </div>
  );
}