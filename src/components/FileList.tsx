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
    <div className="border rounded shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 border-b bg-gray-50">Files</h2>
      {files.length === 0 ? (
        <p className="p-3 sm:p-4 text-gray-500 text-sm sm:text-base">No files yet</p>
      ) : (
        <ul className="max-h-[60vh] overflow-y-auto">
          {files.map((file) => (
            <li
              key={file.id}
              className="flex justify-between items-center p-3 hover:bg-gray-50 border-b text-sm sm:text-base"
            >
              <span
                onClick={() => onSelectFile(file)}
                className="cursor-pointer flex-grow truncate mr-2"
              >
                {file.name}
              </span>
              <button
                onClick={() => onDeleteFile(file.id)}
                className="text-red-500 hover:text-red-700 p-2"
                aria-label="Delete file"
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
