"use client";

import { useState, use } from "react";
import { students } from "@/data/mockData";
import { Student } from "@/types";
import StudentTable from "@/components/StudentTable";
import PDFViewer from "@/components/PDFViewer";
import EvaluationPanel from "@/components/EvaluationPanel";

export default function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  // Unwrap the params promise
  const resolvedParams = use(params);
  const examId = resolvedParams.examId; // Matches folder name [examId]
  
  // You can use examId to fetch specific exam data later
  // For now, we'll just log it or leave it for future use
  console.log(`Viewing exam: ${examId}`);

  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(undefined);

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Exam Evaluation Dashboard</h1>
      
      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow h-[calc(100vh-150px)]">
        
        {/* Left: Student List (3 columns) */}
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Students</h2>
          <StudentTable 
            students={students} 
            onSelect={(student) => setSelectedStudent(student)}
            selectedId={selectedStudent?.id}
          />
        </div>    

        {/* Middle: PDF Viewer (6 columns) */}
        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Answer Script</h2>
          <div className="flex-grow">
            <PDFViewer pdfUrl={selectedStudent?.scriptUrl} />
          </div>
        </div>

        {/* Right: AI Panel (3 columns) */}
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">AI Evaluation</h2>
          <div className="flex-grow">
            <EvaluationPanel student={selectedStudent} />
          </div>
        </div>

      </div>
    </div>
  );
}