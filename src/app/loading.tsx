import Spinner from "@/components/ui/Spinner";

const Loading = () => {
  return (
    <div className={`fixed z-40 h-full w-full bg-gray-950 opacity-50 top-0 left-0 grid place-content-center`}>
      <Spinner />
    </div>
  );
}

export default Loading;
