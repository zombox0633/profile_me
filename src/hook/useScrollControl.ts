import { useCallback, useEffect, useRef, useState } from "react";

function useScrollControl() {
  const [scrollY, setScrollY] = useState<number>(0);

  const divRef = useRef<HTMLDivElement>(null);

  const handleScrollToPoint = useCallback((index: number) => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: index,
        behavior: "smooth",
      });
    }
  }, []);

  // divRef scrollY
  const handleScrollY = (divRef: React.RefObject<HTMLDivElement>) => {
    if (divRef.current) {
      const scrollTop = divRef.current.scrollTop;
      return scrollTop;
    }
    return 0;
  };

  const newScrollY = () => {
    const scrollY = handleScrollY(divRef);
    if (scrollY !== undefined) {
      setScrollY(scrollY);
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener("scroll", newScrollY, {
        passive: true,
      });
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", newScrollY);
      }
    };
  }, []);


  return {
    scrollY,
    divRef,
    handleScrollToPoint
  };
}

export default useScrollControl;
