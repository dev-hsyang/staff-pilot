import React from 'react';

export const InitialPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className="flex flex-col text-center h-full items-center justify-around">{children}</main>
);
