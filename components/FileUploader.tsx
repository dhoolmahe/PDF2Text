"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
          isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
        }`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500 font-medium">Drop files here ...</p>
        ) : (
          <div className="text-gray-500 font-medium">
            Drag & drop files here, or click to select
          </div>
        )}
      </div>

      {/* Preview */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-md font-semibold text-gray-700">
            Selected Files:
          </h2>
          <ul className="divide-y divide-gray-200">
            {files.map((file) => (
              <li
                key={file.name}
                className="flex justify-between items-center py-1">
                <span className="text-sm text-gray-700 truncate max-w-xs">
                  {file.name}
                </span>
                <button
                  onClick={() => removeFile(file.name)}
                  className="text-red-500 hover:underline text-sm">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
