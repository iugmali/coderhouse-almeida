import Navbar from "@/components/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultPage = ({children}: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DefaultPage;
