import React from "react";

function ButtonUserPage({ children }: any) {
  return (
    <div className="bg-button p-1 rounded-16">
      <button
        aria-label="buttonUserPage"
        type="button"
        className="flex items-center justify-center px-9 py-5 rounded-16 bg-white dark:bg-back"
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonUserPage;
