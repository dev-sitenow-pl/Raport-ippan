type Props = {
  text: string;
  cite: string;
}

const Blockquote = ({ text, cite }: Props) => {
  return <blockquote>
    {text}
    <cite>
      {cite}
    </cite>
  </blockquote>
}

export { Blockquote };