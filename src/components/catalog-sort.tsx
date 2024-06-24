import { useState, useEffect} from 'react';
import { CamerasType } from '../types/cameras';

type productTabsProps = {
  setDiplayedCameras: (isActive: []) => void;
  diplayedCameras: CamerasType;
}

function CatalogSort({diplayedCameras, setDiplayedCameras}: productTabsProps): JSX.Element {

  const [sortType, setSortType] = useState('price');

  const [sortOrder, setSortOrder] = useState('minToMax');

  function sortFromTo () {
    return sortOrder === 'minToMax' ? [...diplayedCameras].sort((a, b) => a[sortType] > b[sortType] ? 1 : -1) : [...diplayedCameras].sort((a, b) => a[sortType] < b[sortType] ? 1 : -1);
  }

  useEffect(()=>{
    setDiplayedCameras(sortFromTo);
  }, [sortType, sortOrder]
  );

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title&#45;&#45;h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div onClick={()=>{
              setSortType('price');
            }}
            className="catalog-sort__btn-text"
            >
              <input type="radio" id="sortPrice" name="sort" defaultChecked />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div onClick={()=>{
              setSortType('rating');


            }}
            className="catalog-sort__btn-text"
            >
              <input type="radio" id="sortPopular" name="sort" />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div onClick={()=>setSortOrder('minToMax')} className="catalog-sort__btn catalog-sort__btn&#45;&#45;up">
              <input type="radio" id="up" name="sort-icon" defaultChecked aria-label="По возрастанию" />
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div onClick={()=>setSortOrder('MaxToMin')} className="catalog-sort__btn catalog-sort__btn&#45;&#45;down">
              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" />
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CatalogSort;
