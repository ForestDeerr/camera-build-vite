import Rate from './rate';

const STARS_COUNT = 5;
const STARS = Array.from({ length: STARS_COUNT });

type ReviewRateProps = {
  rating: number;
}

function ReviewRate({rating}: ReviewRateProps): JSX.Element {

  return (
    <div className="rate review-card__rate">
      {STARS.map((_, id) => (
        <Rate key={id} rating={rating} id={id}/>
      ))}
      <p className="visually-hidden">Оценка: 5</p>
    </div>
  );
}

export default ReviewRate;
