'use client';

const Loading = () => {
  return (
    <div className={`fixed h-full w-full bg-gray-950 opacity-50 top-0 left-0 flex justify-center items-center`}>
      <div className={`rounded-full w-16 h-16 border-blue-500 border-t-4 border-l-4 animate-spin`}></div>
    </div>
  );
}

export default Loading;
