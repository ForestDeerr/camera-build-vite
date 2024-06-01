import ReviewsList from './reviews-list';
import { ReviewsType } from '../types/reviews';

import { useState } from 'react';

type ReviewBlockProps = {
  reviews: ReviewsType;
}

function ReviewBlock({reviews}: ReviewBlockProps): JSX.Element {
  const [quantity, setQuantity] = useState(3);

  function quantityCommentsDisplayed () {
    return quantity <= reviews.length ? quantity : reviews.length;
  }

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            {/* <!--<button className="btn" type="button">Оставить свой отзыв</button>--> */}
          </div>
          <ul className="review-block__list">
            {[...reviews].reverse().slice(0, quantityCommentsDisplayed()).map((oneReview) => (
              <ReviewsList key={oneReview.id} oneReview={oneReview} />
            ))}
          </ul>
          <div className="review-block__buttons">
            <button onClick={()=>setQuantity(quantity + 3)} className={`btn btn--purple ${quantity < reviews.length ? '' : 'disabled'}`} type="button">Показать больше отзывов
            </button>
          </div>
        </div>
      </section>
    </div>

  );
}
export default ReviewBlock;
