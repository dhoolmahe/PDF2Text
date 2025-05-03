"use client";

import FileUploader from "../components/FileUploader";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Upload Documents
        </h1>
        <FileUploader />
      </div>
    </div>
  );
}
