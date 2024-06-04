type Props = {
  children: React.ReactNode;
}

const TitleSection = (props: Props) => {
  return <div className="title-box">
    <h2>
      {props.children}
    </h2>
  </div>
}

export { TitleSection };