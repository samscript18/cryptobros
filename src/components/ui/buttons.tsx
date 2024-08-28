import { ButtonHTMLAttributes } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
}

export function ButtonContained({
  children,
  loading,
  loadingText,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`min-w-[120px] disabled:opacity-[.9] disabled:text-[#222] disabled:bg-[#e2e2e2] disabled:font-bold disabled:border-[#e2e2e2] disabled:cursor-not-allowed px-2 py-3 rounded-md text-[.75rem] bg-primary hover:bg-blue-700 text-white duration-300 cursor-pointer border-[1.5px] border-primary flex items-center justify-center gap-4 ${
        loading && 'opacity-80'
      } ${props.className} `}
    >
      {loading ? <>Loading</> : children}
    </button>
  );
}

export function ButtonOutlined({ children, loading, ...props }: Props) {
  return (
    <button
      {...props}
      className={`min-w-[120px] disabled:opacity-[.9] disabled:cursor-not-allowed transition duration-300 px-2 py-3 rounded-md text-[.75rem] border-primary text-primary !cursor-pointer border-[1.5px] flex items-center justify-center  ${
        loading && 'opacity-90'
      } ${props.className} `}
    >
      {loading ? <span>Loading</span> : children}
    </button>
  );
}
