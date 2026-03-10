import { Exam, Student } from "@/types";

export const exams: Exam[] = [
  { id: "1", title: "Data Structures", type: "CAT1", date: "2026-03-10", studentCount: 60 },
  { id: "2", title: "Computer Architecture", type: "FAT", date: "2026-03-15", studentCount: 60 },
];

export const students: Student[] = [
  { id: "s1", name: "Alice Johnson", regNo: "22BCE1001", status: "Pending", scriptUrl: "/sample-script-1.pdf" },
  { id: "s2", name: "Bob Smith", regNo: "22BCE1002", status: "Evaluated", scriptUrl: "/sample-script-2.pdf" },
];