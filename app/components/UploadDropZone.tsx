import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadDropzone() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile) {
      // Validate file size
      if (droppedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds 5MB!");
        return;
      }

      setFile(droppedFile);
      setFileName(droppedFile.name);

      // Navigate to /upload with file name as query
      const objectUrl = URL.createObjectURL(droppedFile); // Convert file to temporary URL
      router.push(`/upload?imageUrl=${encodeURIComponent(objectUrl)}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) {
      // Validate file size
      if (uploadedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds 5MB!");
        return;
      }

      setFile(uploadedFile);
      setFileName(uploadedFile.name);

      // Navigate to /upload with file name as query
      const objectUrl = URL.createObjectURL(uploadedFile); // Convert file to temporary URL
      router.push(`/upload?imageUrl=${encodeURIComponent(objectUrl)}`);
    }
  };

  const handleButtonClick = () => {
    // Simulate a click on the hidden file input when the dropzone or button is clicked
    fileInputRef.current?.click();
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full max-w-lg p-6 border-2 border-dashed rounded-lg cursor-pointer bg-[] border-gray-400 hover:border-secondary"
      onClick={handleButtonClick} // Makes the entire area clickable
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef} // Reference to the hidden file input
        className="hidden"
        onChange={handleFileUpload}
      />
      <button className="btn btn-lg btn-primary mt-10 mb-5 text-white transform transition-transform duration-200 hover:scale-105">Upload Image</button>
      <label className="text-center text-gray-600">
        <p className="text-lg mb-5">or drop a file</p>
      </label>
      {fileName && (
        <p className="mt-4 text-sm text-primary font-semibold">
          Uploaded File: {fileName}
        </p>
      )}
    </div>
  );
}
