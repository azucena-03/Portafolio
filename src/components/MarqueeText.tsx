type MarqueeTextProps = {
  text: string
}

export default function MarqueeText({ text }: MarqueeTextProps) {
  return (
    <div className="flex items-center flex-nowrap">
      <p
        className={`text-xl whitespace-nowrap overflow-visible px-15`}
      >
        {text}
      </p>
      <img src="/images/small-star.png" alt="small star" className="h-5" />
    </div>
  );
}
