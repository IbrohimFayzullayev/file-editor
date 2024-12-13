import React from "react";
import FileManager from "./components/FileManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          File Management Application
        </h1>
        <FileManager />
      </div>
    </div>
  );
}

export default App;
