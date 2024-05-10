type ratingProps = {
  rating: number;
  id: number;

}

function Rate({rating, id}: ratingProps): JSX.Element {

  let star = <use href="#icon-full-star" />;

  if (id + 1 <= rating) {
    star = <use href="#icon-full-star" />;
  } else {
    star = <use href="#icon-star" />;
  }

  return (

    <svg width="17" height="16" aria-hidden="true">
      {star}
    </svg>

  );
}

export default Rate;
