"use client";

import { useState } from "react";

export default function PDFViewer({ pdfUrl }: { pdfUrl?: string }) {
  const [pdfError, setPdfError] = useState(false);

  if (!pdfUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] border-2 border-dashed border-gray-300 rounded-lg text-gray-400 bg-gray-50">
        <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <p>Select a student from the list</p>
        <p className="text-sm">to view their answer script here.</p>
      </div>
    );
  }

  if (pdfError) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] border-2 border-dashed border-red-300 rounded-lg text-red-400 bg-red-50">
        <svg className="w-16 h-16 mb-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p>PDF could not be loaded</p>
        <p className="text-sm">The file might be missing or corrupted.</p>
        <p className="text-xs mt-2 text-gray-400">Path: {pdfUrl}</p>
      </div>
    );
  }

  // Check if it's a valid PDF URL (ends with .pdf)
  if (!pdfUrl.toLowerCase().endsWith('.pdf')) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] border-2 border-dashed border-yellow-300 rounded-lg text-yellow-600 bg-yellow-50">
        <svg className="w-16 h-16 mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>Invalid PDF file</p>
        <p className="text-sm">The file does not appear to be a PDF.</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[500px] w-full border rounded-lg overflow-hidden bg-gray-100">
      <iframe
        src={pdfUrl}
        className="w-full h-full border-none"
        title="Answer Script"
        onError={() => setPdfError(true)}
      />
    </div>
  );
}