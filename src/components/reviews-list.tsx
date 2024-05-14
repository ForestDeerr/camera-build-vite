
import ReviewRate from './review-rate';
import { ReviewType } from '../types/reviews';

type ReviewsListProps = {
  oneReview: ReviewType;
}

function ReviewsList({oneReview}: ReviewsListProps): JSX.Element {
  const {userName, rating, advantage, disadvantage, review} = oneReview;
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">13 апреля</time>
      </div>
      <ReviewRate rating={rating} />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}
export default ReviewsList;
