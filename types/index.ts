export type ExamType = "CAT1" | "CAT2" | "FAT";

export interface Student {
  id: string;
  name: string;
  regNo: string;
  status: "Evaluated" | "Pending";
  scriptUrl: string; // URL to the PDF
}

export interface Exam {
  id: string;
  title: string;
  type: ExamType;
  date: string;
  studentCount: number;
}