import { useCallback, useEffect, useRef, useState } from "react";

function useScrollControl() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-darkGreen");

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

  useEffect(() => {
    switch (true) {
      case scrollY < 777: //0-1012
        setBackgroundColor("bg-darkGreen");
        break;
      case scrollY >= 777 && scrollY < 1666: //1012->2024
        setBackgroundColor("bg-darkSlateGreen");
        break;
      case scrollY >= 1666 && scrollY < 2444: //2024-3036
        setBackgroundColor("bg-feldgrauGreen");
        break;
      case scrollY >= 2444 && scrollY < 3666: //3036-4048
        setBackgroundColor("bg-battleshipGray");
        break;
      case scrollY > 3666: //4048->
        setBackgroundColor("bg-ashGray");
        break;
      default:
        setBackgroundColor("bg-darkGreen");
        break;
    }
  }, [scrollY]);

  return {
    scrollY,
    divRef,
    backgroundColor,
    handleScrollToPoint
  };
}

export default useScrollControl;
