export default function PDFViewer({ pdfUrl }: { pdfUrl?: string }) {
  if (!pdfUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] border-2 border-dashed border-gray-300 rounded-lg text-gray-400 bg-gray-50">
        <p>Select a student from the list</p>
        <p className="text-sm">to view their answer script here.</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[500px] w-full border rounded-lg overflow-hidden">
      <iframe
        src={`${pdfUrl}#toolbar=0`}
        className="w-full h-full border-none"
        title="Answer Script"
      />
    </div>
  );
}