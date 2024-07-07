import CatalogFilterType from './catalog-filter-type';
import CatalogFilterLevel from './catalog-filter-level';

import { CameraType, CamerasType } from '../../types/cameras';
import { categoryCamera } from '../../const';

import { useState, useEffect, } from 'react';

type productTabsProps = {
  setDiplayedCameras: (isActive: []) => void;
  cameras: CamerasType;
  sortOrder: string;
  sortType: string;
}

function CatalogFilters({setDiplayedCameras, cameras, sortOrder, sortType}: productTabsProps): JSX.Element {

  function findMaxPrise () {
    let maxPrise = 0;
    [...cameras].forEach((camera)=>{
      if(camera.price > maxPrise) {
        maxPrise = camera.price;
      }
    });

    return maxPrise;
  }
  const maxPrise = findMaxPrise();

  function findMinPrice () {
    let minPrise = maxPrise;
    [...cameras].forEach((camera)=>{
      if(camera.price < minPrise) {
        minPrise = camera.price;
      }
    });

    return minPrise;
  }
  const minPrise = findMinPrice();

  const [lowPrise, setLowPrise] = useState(minPrise);
  const [highPrise, setHighPrise] = useState(maxPrise);
  const [categoryCameras, setcategoryCamera] = useState('');
  const [addFilterType, setAddFilterType] = useState([]);
  const [addFilterLevel, setAddFilterLevel] = useState([]);

  function filterCamerasLevel () {
    const newCameras = [...cameras];
    const feilterCameras: CameraType[] = [];
    addFilterLevel.forEach((levelFilter)=>{
      newCameras.map((camera)=>{
        if (camera.level === levelFilter) {
          feilterCameras.push(camera);
        }
      });
    });
    return addFilterLevel.length === 0 ? newCameras : feilterCameras;
  }

  const camerasLevel = filterCamerasLevel();

  function filterCamerasType () {
    const newCameras = [...camerasLevel];
    const feilterCameras: CameraType[] = [];
    addFilterType.forEach((typeFilter)=>{
      newCameras.map((camera)=>{
        if (camera.type === typeFilter) {
          feilterCameras.push(camera);
        }
      });
    });
    return addFilterType.length === 0 ? newCameras : feilterCameras;
  }

  const camerasType = filterCamerasType ();

  function filterCamerasCategory() {
    if (categoryCameras !== ('')) {
      return camerasType.filter((camera)=> camera.category === categoryCamera[categoryCameras]);
    } else {
      return camerasType;
    }
  }
  const camerasCategory = filterCamerasCategory ();

  function sortFromTo () {
    return sortOrder === 'minToMax' ? [...camerasCategory].sort((a, b) => a[sortType] > b[sortType] ? 1 : -1) : [...camerasCategory].sort((a, b) => a[sortType] < b[sortType] ? 1 : -1);
  }
  function filterCamersPrice () {
    return sortFromTo ().filter((camera) => camera.price >= lowPrise && camera.price <= highPrise);
  }
  const CamersPrice = filterCamersPrice();


  function filterReset() {
    setLowPrise(minPrise);
    setHighPrise(maxPrise);
    setcategoryCamera('');
    setAddFilterType([]);
  }

  function low (element) {
    if (element.target.value < lowPrise) {
      setDiplayedCameras(CamersPrice);
      setLowPrise(element.target.value);
    }
    setLowPrise(element.target.value);
  }


  function hig (element) {
    if (element.target.value >= lowPrise) {
      setDiplayedCameras(CamersPrice);
      setHighPrise((element.target.value));
    }
    setHighPrise((element.target.value));
  }

  useEffect(()=>{
    setDiplayedCameras(CamersPrice);
  }, [lowPrise, highPrise, addFilterType, categoryCameras, addFilterLevel]
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
                  onChange={(e) => low(e)}
                  name="price" placeholder="от"
                />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" value={highPrise}
                  onChange={(e) => hig(e) }
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
              <input type="radio" name="category" value="photocamera" onClick={(e)=>setcategoryCamera(e.target.value)} />
              <span className="custom-radio__icon"></span>
              <span className="custom-radio__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-radio catalog-filter__item">
            <label>
              <input type="radio" name="category" value="videocamera" onClick={(e)=>setcategoryCamera(e.target.value)} />
              <span className="custom-radio__icon"></span><span className="custom-radio__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>

        <CatalogFilterType categoryCameras={categoryCameras} addFilterType={addFilterType} setAddFilterType={setAddFilterType} />
        <CatalogFilterLevel addFilterLevel={addFilterLevel} setAddFilterLevel={setAddFilterLevel}/>

        <button onClick={()=>filterReset()} className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
        </button>
      </form>
    </div>

  );
}

export default CatalogFilters;

