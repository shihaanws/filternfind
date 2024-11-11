import React from "react";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-800 text-white shadow">
        <div className="flex items-center">
          <img src="./logo.png" alt="Logo" className="h-10 w-auto" />{" "}
        </div>
      </header>
    </div>
  );
}

