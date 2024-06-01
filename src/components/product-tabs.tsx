import CharacteristicsList from './characteristics-list';

import { useState } from 'react';
import { CameraType } from '../types/cameras';

type productTabsProps = {
  camera: CameraType;
}

function ProductTabs({camera}: productTabsProps): JSX.Element {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button onClick={()=>{
          setToggle(!toggle);
        }} className={`tabs__control ${toggle ? 'is-active' : ''}`} type="button"
        >Характеристики
        </button>
        <button onClick={()=>{
          setToggle(!toggle);
        }} className={`tabs__control ${toggle ? '' : 'is-active'}`} type="button"
        >Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${toggle ? 'is-active' : ''}`}>
          <CharacteristicsList camera={camera}/>
        </div>
        <div className={`tabs__element ${toggle ? '' : 'is-active'}`}>
          <div className="product__tabs-text">
            <p>{camera.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
