import React from 'react';

export const CommutePageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className="flex flex-col text-center bg-gray-50 h-[calc(100%-6.25rem)] items-center justify-around">
    {children}
  </main>
);
