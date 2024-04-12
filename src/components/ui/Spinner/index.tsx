import {twMerge} from "tailwind-merge";

const Spinner = ({className}: {className?: string}) => {
  return (
    <div className={twMerge(`rounded-full w-16 h-16 border-gray-200 border-4 border-t-blue-500 border-l-blue-500 animate-spin`, className)} />
  )
}

export const LoadingScreen = () => {
  return (
    <div className={`fixed z-40 h-full w-full bg-gray-950 opacity-50 top-0 left-0 grid place-content-center`}>
      <Spinner />
    </div>
  );
}

export default Spinner;
