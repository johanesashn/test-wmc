// Import modules
import React from "react";
import Image from "next/image";

// Donation Page
const page = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-10 my-32">
        <h2 className="text-5xl font-bold">Help Us Grow</h2>
        <Image src="./barcode.svg" width={350} height={350} alt={"QRIS"} />
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-center">
            Yay Methodist Wesley Sultan <br /> Agung Medan
          </h3>
          <p className="text-2xl text-center">3491 36 9696</p>
        </div>
      </div>
    </div>
  );
};

export default page;
