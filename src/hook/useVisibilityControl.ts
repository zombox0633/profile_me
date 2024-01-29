import { useEffect, useState } from "react";

type useVisibilityControlType = {
  scrollY: number;
};

type VisibilityState = {
  Profile: boolean;
  Educational: boolean;
  Skills: boolean;
  Contact: boolean;
};

function useVisibilityControl({ scrollY }: useVisibilityControlType) {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    Profile: false,
    Educational: false,
    Skills: false,
    Contact: false,
  });

  useEffect(() => {
    const newVisibility = {
      Profile: scrollY >= 777 && scrollY < 1666,
      Educational: scrollY >= 1666 && scrollY < 2444,
      Skills: scrollY >= 2444 && scrollY < 3666,
      Contact: scrollY > 3666,
    };
    setIsVisible(newVisibility);
  }, [scrollY]);

  return {
    isVisible,
  };
}

export default useVisibilityControl;
