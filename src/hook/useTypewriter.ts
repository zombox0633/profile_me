import { useEffect, useState } from "react";

type useTypewriterType = {
  messageSet: string[];
  period?: number;
};

function useTypewriter({ messageSet, period = 2000 }: useTypewriterType) {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingDelay, setTypingDelay] = useState<number>(200);

  useEffect(() => {
    const fullText = messageSet[loopNum % messageSet.length];

    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingDelay(400);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingDelay(200);
      }
  
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingDelay(period || 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500);
      } else {
        const newDelay = isDeleting ? 100 : 200;
        setTypingDelay(newDelay);
      }
    }

    const timer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, messageSet, period, typingDelay]);

  return text;
}

export default useTypewriter;
