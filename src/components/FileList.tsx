import React from "react";

interface File {
  id: string;
  name: string;
  content: string;
}

interface FileListProps {
  files: File[];
  onSelectFile: (file: File) => void;
  onDeleteFile: (id: string) => void;
}

const FileList: React.FC<FileListProps> = ({
  files,
  onSelectFile,
  onDeleteFile,
}) => {
  return (
    <div className="border rounded">
      <h2 className="text-xl font-semibold p-4 border-b">Files</h2>
      {files.length === 0 ? (
        <p className="p-4 text-gray-500">No files yet</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li
              key={file.id}
              className="flex justify-between items-center p-3 hover:bg-gray-100 border-b"
            >
              <span
                onClick={() => onSelectFile(file)}
                className="cursor-pointer flex-grow"
              >
                {file.name}
              </span>
              <button
                onClick={() => onDeleteFile(file.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileList;
