"use client";

import { SnackbarProvider } from "notistack";
import React from "react";

export function Notistack({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider maxSnack={3} transitionDuration={500}>
      {children}
    </SnackbarProvider>
  );
}
