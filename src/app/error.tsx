'use client' // Error components must be Client Components

import {useEffect} from 'react'
import Button from "@/components/ui/Button";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({error, reset}: Props) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={`mt-4 flex flex-col items-center`}>
      <h2 className={`text-center`}>Ops... Deu ruim!</h2>
      <Button
        handleClick={() => reset()}
      >
        Recarregue
      </Button>
    </div>
  )
}

export default Error;
