type ButtonUpProps = {
  ref: HTMLDivElement;
}


function ButtonUp({ref}: ButtonUpProps): JSX.Element {
  return (
    <button className="up-btn" onClick={()=>{
      ref.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }}
    >
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </button>
  );
}

export default ButtonUp;
