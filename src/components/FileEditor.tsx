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
      <div className="flex flex-col space-y-2">
        <label htmlFor="fileName" className="text-sm font-medium text-gray-700">
          File Name
        </label>
        <input
          id="fileName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-sm sm:text-base border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter file name"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="fileContent" className="text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="fileContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[40vh] sm:h-[50vh] p-2 text-sm sm:text-base border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter file content"
        />
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handleSave}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm sm:text-base transition-colors"
        >
          Save File
        </button>
      </div>
    </div>
  );
};

export default FileEditor;
