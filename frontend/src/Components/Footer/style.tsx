import React from 'react';

export const FooterBtnWrapper = ({
  children,
  select,
  onClick,
}: {
  children: React.ReactNode;
  select: boolean;
  onClick: () => void;
}) => {
  const commonStyle = `text-center cursor-pointer flex flex-col h-[3rem] w-[5rem] justify-between items-center`;
  const selectStyle = `${select ? `text-gray-700` : `text-gray-400`}`;
  const style = `${commonStyle} ${selectStyle}`;

  if (!select) {
    return (
      <button className={style} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};
