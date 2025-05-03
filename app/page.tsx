"use client";

import FileUploader from "../components/FileUploader";
import ChatBot from "../components/Chatbot";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-6xl flex space-x-12">
        {/* Left side: File Upload */}
        <div className="w-1/2 bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Upload Documents
          </h1>
          <FileUploader />
        </div>

        {/* Right side: ChatBot */}
        <div className="w-1/2 bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            AI Chatbot - Document Query
          </h1>
          <ChatBot />
        </div>
      </div>
    </div>
  );
}
