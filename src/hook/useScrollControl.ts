import { useEffect, useState } from "react";

function useScrollControl() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-darkGreen");

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case scrollY < 777: //0-1010
        setBackgroundColor("bg-darkGreen");
        break;
      case scrollY >= 777 && scrollY < 1666: //1010->2025
        setBackgroundColor("bg-darkSlateGreen");
        break;
      case scrollY >= 1666 && scrollY < 2444: //2025-3035
        setBackgroundColor("bg-feldgrauGreen");
        break;
      case scrollY >= 2444 && scrollY < 3666: //3035-4048
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
    backgroundColor,
  };
}

export default useScrollControl;
