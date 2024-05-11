import Rate from './rate';

const STARS_COUNT = 5;
const STARS = Array.from({ length: STARS_COUNT });

type CardRateProps = {
  rating: number;
  reviewCount : number;
}

function CardRate({rating, reviewCount}: CardRateProps): JSX.Element {


  return (
    <div className="rate product-card__rate">
      {STARS.map((_, id) => (
        <Rate key={id} rating={rating} id={id}/>
      ))}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}

export default CardRate;

