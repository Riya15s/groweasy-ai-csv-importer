"use client";

import { useState } from "react";
import Papa from "papaparse";

import UploadZone from "./UploadZone";
import PreviewTable from "../preview/PreviewTable";
import api from "@/services/api";

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        console.log(results.data);
        setPreviewData(results.data as any[]);
      },
    });
  };

  const handleConfirmImport = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Backend Response:", response.data);

      alert("CSV Imported Successfully!");

    } catch (error) {
      console.error(error);
      alert("Import Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <UploadZone onFileSelect={handleFileSelect} />

      {file && (
        <div className="rounded-lg border bg-green-50 p-4">

          <p className="font-medium">
            Selected File:
          </p>

          <p>{file.name}</p>

          <p>{(file.size / 1024).toFixed(2)} KB</p>

        </div>
      )}

      <PreviewTable data={previewData} />

      {previewData.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleConfirmImport}
            disabled={loading}
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Importing..." : "Confirm Import"}
          </button>
        </div>
      )}

    </div>
  );
}