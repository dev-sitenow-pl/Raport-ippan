type Props = {
  ABTitle: string,
  ABText: string,
}
const AlternatelyBox = ({ ABTitle, ABText }: Props) => {
  return <>
    <div className="alternately-boxes__box">
      <div className="alternately-boxes__box__title">
        <h3 dangerouslySetInnerHTML={{ __html: ABTitle }} />
      </div>
      <div className="alternately-boxes__box__text">
        <p dangerouslySetInnerHTML={{ __html: ABText }} />
      </div>

    </div>
  </>
}

export { AlternatelyBox }