type Props = {
  children: React.ReactNode;
}

const TitleSectionH3 = (props: Props) => {
  return <div className="title-box">
    <h3>
      {props.children}
    </h3>
  </div>
}

export { TitleSectionH3 };