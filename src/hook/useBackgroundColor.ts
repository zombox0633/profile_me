import { useEffect, useState } from "react";

type useBackgroundColorType = {
  scrollY: number;
};

function useBackgroundColor({ scrollY }: useBackgroundColorType) {
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-darkGreen");

  useEffect(() => {
    switch (true) {
      case scrollY < 660: //0-1012
        setBackgroundColor("bg-darkGreen");
        break;
      case scrollY >= 660 && scrollY < 1334: //1012->2024
        setBackgroundColor("bg-darkSlateGreen");
        break;
      case scrollY >= 1334 && scrollY < 2025: //2024-3036
        setBackgroundColor("bg-feldgrauGreen");
        break;
      case scrollY >= 2025 && scrollY < 3666: //3036-4048
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
    backgroundColor,
  };
}

export default useBackgroundColor;
