"use client";

import { Suspense } from "react";
import StudentsContent from "./StudentsContent";

export default function StudentsPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading students...</div>}>
      <StudentsContent />
    </Suspense>
  );
}