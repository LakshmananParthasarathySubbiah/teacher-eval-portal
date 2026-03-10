import { 
  AnswerScript, 
  ScriptAnswer, 
  EvaluationResult, 
  Student,
  ScriptWithDetails 
} from "@/types/index";
import { students, answerScripts, scriptAnswers, evaluationResults } from "@/data/mockData";

// Get all scripts for a specific exam
export function getScriptsByExam(examId: string): AnswerScript[] {
  return answerScripts.filter(script => script.examId === examId);
}

// Get script with all related data (NO RECURSION)
export function getScriptWithDetails(scriptId: string): ScriptWithDetails | undefined {
  const script = answerScripts.find(s => s.id === scriptId);
  if (!script) return undefined;

  const student = students.find(s => s.id === script.studentId);
  const answers = scriptAnswers.filter(a => a.scriptId === scriptId);
  const evaluation = evaluationResults.find(e => e.scriptId === scriptId);

  return {
    script,
    student,
    answers,
    evaluation,
  };
}

// Get all scripts for a student
export function getScriptsByStudent(studentId: string): AnswerScript[] {
  return answerScripts.filter(script => script.studentId === studentId);
}

// Get evaluation for a script
export function getEvaluationForScript(scriptId: string): EvaluationResult | undefined {
  return evaluationResults.find(e => e.scriptId === scriptId);
}

// Calculate total marks for a script
export function calculateTotalMarks(scriptId: string): { obtained: number; max: number } {
  const answers = scriptAnswers.filter(a => a.scriptId === scriptId);
  const obtained = answers.reduce((sum, a) => sum + (a.marks || 0), 0);
  const max = answers.reduce((sum, a) => sum + 20, 0); // Assuming 20 marks per question
  return { obtained, max };
}

// Get students who have scripts for an exam
export function getStudentsWithScripts(examId: string): Student[] {
  const examScripts = getScriptsByExam(examId);
  const studentIds = examScripts.map(script => script.studentId);
  return students.filter(student => studentIds.includes(student.id));
}

// Get pending scripts for an exam
export function getPendingScripts(examId: string): AnswerScript[] {
  return answerScripts.filter(script => script.examId === examId && script.status === "pending");
}

// Get evaluated scripts for an exam
export function getEvaluatedScripts(examId: string): AnswerScript[] {
  return answerScripts.filter(script => script.examId === examId && script.status === "evaluated");
}