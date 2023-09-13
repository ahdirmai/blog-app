"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect } from "react";

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};
