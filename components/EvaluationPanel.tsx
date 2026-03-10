"use client";

import { useState } from "react";
import { Student } from "@/types";

export default function EvaluationPanel({ student }: { student?: Student }) {
  const [isEvaluating, setIsEvaluating] = useState(false);

  if (!student) {
    return <div className="text-gray-400 text-center mt-10">Waiting for selection...</div>;
  }

  const handleEvaluate = () => {
    setIsEvaluating(true);
    setTimeout(() => setIsEvaluating(false), 2000); // Mock AI delay
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 pb-4 border-b">
        <h3 className="font-bold text-lg text-gray-800">{student.name}</h3>
        <p className="text-sm text-gray-500">{student.regNo}</p>
      </div>

      <button 
        onClick={handleEvaluate}
        disabled={isEvaluating}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition disabled:opacity-50"
      >
        {isEvaluating ? "Analyzing Script..." : "Run AI Evaluation"}
      </button>

      {/* Mock Results Area */}
      <div className="mt-6 flex-grow border rounded bg-gray-50 p-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Evaluation Output</h4>
        {isEvaluating ? (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
           <p className="text-sm text-gray-500 italic">No evaluation generated yet.</p>
        )}
      </div>
    </div>
  );
}