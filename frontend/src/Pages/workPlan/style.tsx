import React from 'react';

export const WorkPlanPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className="flex gap-4 flex-col text-center h-min min-h-[calc(100%-6.5rem)] bg-gray-50 max-h-max items-center py-5">
    {children}
  </main>
);
