import { CamerasType } from '../types/cameras';
import { useState, useEffect, } from 'react';

type productTabsProps = {
  setDiplayedCameras: (isActive: []) => void;
  diplayedCameras: CamerasType;
}

function CatalogFilter({diplayedCameras, setDiplayedCameras}: productTabsProps): JSX.Element {


  const [arr, setArr] = useState([...diplayedCameras]);


  const [lowPrise, setLowPrise] = useState(0);
  const [highPrise, setHighPrise] = useState(220000);


  // function max () {
  //   if (lowPrise < highPrise) {
  //     setHighPrise(lowPrise);
  //   }else {
  //     setHighPrise(e.target.value);
  //     console.log(e.target.value)
  //   }
  // }


  useEffect(()=>{
    setDiplayedCameras([...diplayedCameras].filter((camera) => camera.price >= lowPrise && camera.price <= highPrise));
  }, [lowPrise]
  );


  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" value={lowPrise}
                  onChange={(e) => setLowPrise(e.target.value)}
                  name="price" placeholder="от"
                />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" value={highPrise}
                  onChange={(e) => e.target.value > lowPrise ? setHighPrise(e.target.value) : lowPrise}
                  name="priceUp" placeholder="до"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Категория</legend>
          <div className="custom-radio catalog-filter__item">
            <label>
              <input type="radio" name="category" value="photocamera" defaultChecked />
              <span className="custom-radio__icon"></span>
              <span className="custom-radio__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-radio catalog-filter__item">
            <label>
              <input type="radio" name="category" value="videocamera" />
              <span className="custom-radio__icon"></span><span className="custom-radio__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="digital" defaultChecked />
              <span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="film" disabled />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="snapshot" />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="collection" defaultChecked disabled />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="zero" defaultChecked />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="non-professional" />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="professional" />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
        <button onClick={()=>setDiplayedCameras(arr)} className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
        </button>
      </form>
    </div>

  );
}

export default CatalogFilter;

