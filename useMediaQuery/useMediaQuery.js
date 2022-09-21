import { useEffect, useState } from "react";

const useMediaQuery = ({ minWidth = '721' }) => {
  const [media, setMedia] = useState();

  useEffect(() => {
    const handle = () => {
      if (window.innerWidth >= parseInt(minWidth)) {
        setMedia("pc");
      } else {
        setMedia("mobile");
      }
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [minWidth]);

  return media;
};

export default useMediaQuery;
