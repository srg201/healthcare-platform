import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
};

const SubmitButton = ({ isLoading, className, children }: Props) => {
  return (
    <Button
      type="submit"
      className={cn("shad-primary-btn w-full", className)}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/icons/loader.svg"}
            alt="Loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
