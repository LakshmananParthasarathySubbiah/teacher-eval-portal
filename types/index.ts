// Exam Types
export type ExamType = "CAT1" | "CAT2" | "FAT";

// Course Interface
export interface Course {
  id: string;
  name: string;
  code: string;
  department?: string;
  semester?: number;
  createdAt: string;
}

// Student Interface
export interface Student {
  id: string;
  name: string;
  regNo: string;
  email?: string;
  section?: string;
  status: "Evaluated" | "Pending";
  scriptUrl?: string;
  courseId?: string;
}

// Exam Interface
export interface Exam {
  id: string;
  title: string;
  type: ExamType;
  date: string;
  studentCount: number;
  courseId: string;
}

// Answer Script
export interface AnswerScript {
  id: string;
  studentId: string;
  examId: string;
  pdfUrl: string;
  uploadedAt: string;
  status: "pending" | "evaluated" | "error";
  fileName?: string;
  fileSize?: number;
}

// Script Answer
export interface ScriptAnswer {
  id: string;
  scriptId: string;
  questionNumber: number;
  answer: string;
  marks?: number;
  feedback?: string;
  evaluatedAt?: string;
}

// Evaluation Result
export interface EvaluationResult {
  id: string;
  scriptId: string;
  totalMarks: number;
  maxMarks: number;
  confidence: number;
  evaluatedAt: string;
  evaluatedBy: "ai" | "teacher";
  comments?: string;
}

// Question
export interface Question {
  id: string;
  examId: string;
  number: number;
  text: string;
  maxMarks: number;
  co?: string;
  bloomLevel?: "remember" | "understand" | "apply" | "analyze" | "evaluate" | "create";
}

// Script With Details (for API responses)
export interface ScriptWithDetails {
  script: AnswerScript;
  student?: Student;
  answers?: ScriptAnswer[];
  evaluation?: EvaluationResult;
}