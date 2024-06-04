type Props = {
  handleMenuToggle: () => void;
};

const MenuBtnMobile = ({ handleMenuToggle }: Props) => {
  return <>
    <div id="btn-hamburger" onClick={handleMenuToggle}>
      <span className="material-symbols-outlined">
        menu
      </span>
      <span className="material-symbols-outlined">
        close
      </span>
    </div>
  </>
}
export { MenuBtnMobile };