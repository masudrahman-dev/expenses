import React from "react";
import clx from "../../utils/clx";

interface AvatarProps {
  className?: string;
  src: string;
  alt?: string;
}
const Avatar: React.FC<AvatarProps> = ({ className, src, alt }) => {
  return (
    <>
      <img
        className={clx(" w-8 h-8 ring-white  ring-4 rounded-full", className)}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default Avatar;
