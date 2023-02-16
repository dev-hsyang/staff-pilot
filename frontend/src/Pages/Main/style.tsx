import React from 'react';

export const MainPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col">{children}</section>
);
