"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({
  onFileSelect,
}: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer rounded-xl border-2 border-dashed border-blue-400 bg-white p-12 text-center hover:bg-blue-50 transition"
    >
      <input {...getInputProps()} />

      <UploadCloud
        size={60}
        className="mx-auto mb-4 text-blue-600"
      />

      <h2 className="text-xl font-semibold">
        Drag & Drop CSV Here
      </h2>

      <p className="mt-2 text-gray-500">
        or click to choose a CSV file
      </p>
    </div>
  );
}