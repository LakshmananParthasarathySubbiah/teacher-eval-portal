import { courses as initialCourses, exams as initialExams, students as initialStudents, answerScripts as initialScripts } from '@/data/mockData';
import { Course, Exam, Student, AnswerScript, EvaluationResult } from '@/types';

export let courses: Course[] = [...initialCourses];
export let exams: Exam[] = [...initialExams];
export let students: Student[] = [...initialStudents];
export let scripts: AnswerScript[] = [...initialScripts];
export let evaluations: EvaluationResult[] = [];

// Rubrics: examId -> pdfUrl
export let rubrics: Map<string, string> = new Map();