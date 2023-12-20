import {twMerge} from "tailwind-merge";

const Spinner = ({className}: {className?: string}) => {
  return (
    <div className={twMerge(`rounded-full w-16 h-16 border-gray-200 border-4 border-t-blue-500 border-l-blue-500 animate-spin`, className)} />
  )
}

export default Spinner;
