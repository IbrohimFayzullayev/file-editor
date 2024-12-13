import React, { useState, useEffect } from "react";

interface File {
  id: string;
  name: string;
  content: string;
}

interface FileEditorProps {
  file: File;
  onSave: (id: string, name: string, content: string) => void;
}

const FileEditor: React.FC<FileEditorProps> = ({ file, onSave }) => {
  const [name, setName] = useState(file.name);
  const [content, setContent] = useState(file.content);

  useEffect(() => {
    setName(file.name);
    setContent(file.content);
  }, [file]);

  const handleSave = () => {
    onSave(file.id, name, content);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="File Name"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-64 p-2 border rounded"
        placeholder="File Content"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save File
      </button>
    </div>
  );
};

export default FileEditor;
