import useTypewriter from "../hook/useTypewriter";

type TypewriterType = {
  text: string[];
};

function Typewriter({ text }: TypewriterType) {
  const typewriterText = useTypewriter({ messageSet: text, period: 3000 });

  return (
    <div className='h-24'>
      <h1 className='typewriter__animation pr-2 border-r-[0.08em] border-solid border-white whitespace-pre overflow-hidden'>
        {typewriterText}
      </h1>
    </div>
  );
}

export default Typewriter;
