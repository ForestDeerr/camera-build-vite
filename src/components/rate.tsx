type ratingProps = {
  rating: number;
  id: number;

}

function Rate({rating, id}: ratingProps): JSX.Element {

  return (

    <svg width="17" height="16" aria-hidden="true">
      {id + 1 <= rating ? <use href="#icon-full-star" /> : <use href="#icon-star" />}
    </svg>

  );
}

export default Rate;
