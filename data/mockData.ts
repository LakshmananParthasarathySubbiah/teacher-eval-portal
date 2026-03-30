import { 
  Exam, 
  Student, 
  Course, 
  AnswerScript, 
  ScriptAnswer, 
  EvaluationResult,
  Question 
} from "@/types/index";  // Make sure the import path is correct

// Courses
export const courses: Course[] = [
  {
    id: "c1",
    name: "Data Structures",
    code: "CS201",
    department: "Computer Science",
    semester: 3,
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "c2",
    name: "Computer Architecture",
    code: "CS202",
    department: "Computer Science",
    semester: 4,
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "c3",
    name: "Database Systems",
    code: "CS301",
    department: "Computer Science",
    semester: 5,
    createdAt: "2026-01-15T10:00:00Z",
  },
];

// Exams
export const exams: Exam[] = [
  { 
    id: "1", 
    title: "Data Structures CAT1", 
    type: "CAT1", 
    date: "2026-03-10", 
    studentCount: 60,
    courseId: "c1"
  },
  { 
    id: "2", 
    title: "Computer Architecture FAT", 
    type: "FAT", 
    date: "2026-03-15", 
    studentCount: 60,
    courseId: "c2"
  },
  { 
    id: "3", 
    title: "Database Systems CAT2", 
    type: "CAT2", 
    date: "2026-03-20", 
    studentCount: 45,
    courseId: "c3"
  },
];

// Students
export const students: Student[] = [
  { 
    id: "s1", 
    name: "Alice Johnson", 
    regNo: "22BCE1001", 
    email: "alice.j@example.com",
    section: "A",
    status: "Pending", 
    scriptUrl: "/pdfs/22BCE1001_ds_cat1.pdf",
    courseId: "c1"
  },
  { 
    id: "s2", 
    name: "Bob Smith", 
    regNo: "22BCE1002", 
    email: "bob.s@example.com",
    section: "A",
    status: "Evaluated", 
    scriptUrl: "/pdfs/22BCE1002_ds_cat1.pdf",
    courseId: "c1"
  },
  { 
    id: "s3", 
    name: "Charlie Brown", 
    regNo: "22BCE1003", 
    email: "charlie.b@example.com",
    section: "B",
    status: "Pending", 
    scriptUrl: "/pdfs/22BCE1003_ca_fat.pdf",
    courseId: "c2"
  },
  { 
    id: "s4", 
    name: "Diana Prince", 
    regNo: "22BCE1004", 
    email: "diana.p@example.com",
    section: "B",
    status: "Evaluated", 
    scriptUrl: "/pdfs/22BCE1004_ca_fat.pdf",
    courseId: "c2"
  },
];

// Answer Scripts
export const answerScripts: AnswerScript[] = [
  {
    id: "as1",
    studentId: "s1",
    examId: "1",
    pdfUrl: "/pdfs/22BCE1001_ds_cat1.pdf",
    uploadedAt: "2026-03-11T09:30:00Z",
    status: "pending",
    fileName: "22BCE1001_ds_cat1.pdf",
    fileSize: 2457600,
  },
  {
    id: "as2",
    studentId: "s2",
    examId: "1",
    pdfUrl: "/pdfs/22BCE1002_ds_cat1.pdf",
    uploadedAt: "2026-03-11T10:15:00Z",
    status: "evaluated",
    fileName: "22BCE1002_ds_cat1.pdf",
    fileSize: 3125600,
  },
  {
    id: "as3",
    studentId: "s3",
    examId: "2",
    pdfUrl: "/pdfs/22BCE1003_ca_fat.pdf",
    uploadedAt: "2026-03-16T08:45:00Z",
    status: "pending",
    fileName: "22BCE1003_ca_fat.pdf",
    fileSize: 1894400,
  },
  {
    id: "as4",
    studentId: "s4",
    examId: "2",
    pdfUrl: "/pdfs/22BCE1004_ca_fat.pdf",
    uploadedAt: "2026-03-16T09:20:00Z",
    status: "evaluated",
    fileName: "22BCE1004_ca_fat.pdf",
    fileSize: 2789300,
  },
];

// Script Answers
export const scriptAnswers: ScriptAnswer[] = [
  {
    id: "sa1",
    scriptId: "as2",
    questionNumber: 1,
    answer: "A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. Properties include: maximum nodes at level l is 2^l, maximum nodes in a tree of height h is 2^h - 1.",
    marks: 18,
    feedback: "Good explanation of tree properties. Could include more examples of real-world applications.",
    evaluatedAt: "2026-03-12T14:20:00Z",
  },
  {
    id: "sa2",
    scriptId: "as2",
    questionNumber: 2,
    answer: "Time complexity of binary search tree operations: Search O(h), Insert O(h), Delete O(h) where h is height. In worst case (skewed tree), O(n). In best case (balanced tree), O(log n).",
    marks: 15,
    feedback: "Correct analysis. Mention that self-balancing trees maintain O(log n).",
    evaluatedAt: "2026-03-12T14:22:00Z",
  },
  {
    id: "sa3",
    scriptId: "as4",
    questionNumber: 1,
    answer: "Computer architecture refers to the design and organization of a computer's core components including CPU, memory, and I/O systems. The Von Neumann architecture uses a single memory space for both instructions and data.",
    marks: 17,
    feedback: "Good foundation. Consider adding details about pipelining.",
    evaluatedAt: "2026-03-17T11:30:00Z",
  },
];

// Evaluation Results
export const evaluationResults: EvaluationResult[] = [
  {
    id: "er1",
    scriptId: "as2",
    totalMarks: 33,
    maxMarks: 40,
    confidence: 92,
    evaluatedAt: "2026-03-12T14:25:00Z",
    evaluatedBy: "ai",
    comments: "Strong understanding of data structures concepts",
  },
  {
    id: "er2",
    scriptId: "as4",
    totalMarks: 17,
    maxMarks: 20,
    confidence: 88,
    evaluatedAt: "2026-03-17T11:35:00Z",
    evaluatedBy: "ai",
    comments: "Good basic understanding of computer architecture",
  },
];

// Questions
export const questions: Question[] = [
  {
    id: "q1",
    examId: "1",
    number: 1,
    text: "Explain Binary Tree data structure and its properties.",
    maxMarks: 20,
    co: "CO1",
    bloomLevel: "understand",
  },
  {
    id: "q2",
    examId: "1",
    number: 2,
    text: "Analyze time complexity of Binary Search Tree operations.",
    maxMarks: 20,
    co: "CO2",
    bloomLevel: "analyze",
  },
  {
    id: "q3",
    examId: "2",
    number: 1,
    text: "Explain the Von Neumann architecture and its components.",
    maxMarks: 20,
    co: "CO1",
    bloomLevel: "understand",
  },
];