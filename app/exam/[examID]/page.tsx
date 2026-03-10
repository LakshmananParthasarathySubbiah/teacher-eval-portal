"use client";

import { useState, use } from "react";
import { students as initialStudents, answerScripts as initialAnswerScripts } from "@/data/mockData";
import { Student, AnswerScript } from "@/types";
import StudentTable from "@/components/StudentTable";
import PDFViewer from "@/components/PDFViewer";
import EvaluationPanel from "@/components/EvaluationPanel";
import PDFUploadModal from "@/components/PDFUploadModal";

export default function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const resolvedParams = use(params);
  const examId = resolvedParams.examId;
  
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [answerScripts, setAnswerScripts] = useState<AnswerScript[]>(initialAnswerScripts);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(undefined);
  const [uploadingStudent, setUploadingStudent] = useState<Student | null>(null);

  const handleAddStudent = (newStudent: Omit<Student, "id" | "status">) => {
    const student: Student = {
      ...newStudent,
      id: `s${students.length + 1}`,
      status: "Pending",
      scriptUrl: "",
      courseId: examId,
    };
    setStudents([...students, student]);
  };

  const handleUploadPDF = (studentId: string, file: File, pdfUrl: string) => {
    // Update student
    setStudents(prev =>
      prev.map(s =>
        s.id === studentId ? { ...s, scriptUrl: pdfUrl } : s
      )
    );

    // Create answer script
    const newScript: AnswerScript = {
      id: `as${answerScripts.length + 1}`,
      studentId,
      examId,
      pdfUrl,
      uploadedAt: new Date().toISOString(),
      status: "pending",
      fileName: file.name,
      fileSize: file.size,
    };
    setAnswerScripts(prev => [...prev, newScript]);

    // If the uploaded student is currently selected, update selectedStudent
    if (selectedStudent?.id === studentId) {
      setSelectedStudent(prev => prev ? { ...prev, scriptUrl: pdfUrl } : prev);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Exam Evaluation Dashboard (Exam ID: {examId})</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow h-[calc(100vh-150px)]">
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <StudentTable 
            students={students} 
            onSelect={(student) => setSelectedStudent(student)}
            selectedId={selectedStudent?.id}
            onAddStudent={handleAddStudent}
            onUploadClick={setUploadingStudent}
          />
        </div>    

        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Answer Script</h2>
          <div className="flex-grow">
            <PDFViewer pdfUrl={selectedStudent?.scriptUrl} />
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">AI Evaluation</h2>
          <div className="flex-grow">
            <EvaluationPanel student={selectedStudent} />
          </div>
        </div>
      </div>

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