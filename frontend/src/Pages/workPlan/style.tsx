import React from 'react';

export const WorkPlanPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className="flex flex-col text-center bg-gray-100 h-screen items-center justify-around">
    {children}
  </main>
);
