import React, { useState, useEffect } from "react";
import FileList from "./FileList";
import FileEditor from "./FileEditor";

interface File {
  id: string;
  name: string;
  content: string;
}

const FileManager: React.FC = () => {
  const [files, setFiles] = useState<File[]>(() => {
    const savedFiles = localStorage.getItem("files");
    return savedFiles ? JSON.parse(savedFiles) : [];
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  const addFile = (name: string, content: string) => {
    const newFile: File = {
      id: Date.now().toString(),
      name,
      content,
    };
    setFiles([...files, newFile]);
  };

  const editFile = (id: string, newName: string, newContent: string) => {
    setFiles(
      files.map((file) =>
        file.id === id ? { ...file, name: newName, content: newContent } : file
      )
    );
  };

  const deleteFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id));
    setSelectedFile(null);
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <FileList
          files={files}
          onSelectFile={setSelectedFile}
          onDeleteFile={deleteFile}
        />
        <button
          onClick={() => addFile("New File", "")}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Create New File
        </button>
      </div>
      <div className="w-2/3">
        {selectedFile ? (
          <FileEditor file={selectedFile} onSave={editFile} />
        ) : (
          <div className="text-center text-gray-500">
            Select a file to edit or create a new one
          </div>
        )}
      </div>
    </div>
  );
};

export default FileManager;
