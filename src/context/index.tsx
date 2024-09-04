"use client";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext } from "react";

const AppContext = createContext<ContextType>({
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <AppContext.Provider
      value={{
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
