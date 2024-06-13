import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormSearch(): JSX.Element {
  const quantityDisplayedCamerasInList = 4;

  const allCameras = useAppSelector((state)=>state.cameras);
  const [request, setRequest] = useState('');

  const foundCameras = allCameras.filter((camera) => camera.name.toLowerCase().includes(request.toLowerCase()));

  return (

    <div className="form-search">
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту"
            value={request} onChange={(e) => setRequest(e.target.value)}
          />
        </label>
        <ul className="form-search__select-list"
          style={{overflowY: foundCameras.length <= quantityDisplayedCamerasInList ? 'hidden' : 'scroll',
            opacity:'1',
            visibility: request.length < 3 ? 'hidden' : 'visible'}}
        >
          { foundCameras.length === 0 ?
            <li className="form-search__select-item">Товар не найден</li> :
            foundCameras.map((camera)=>(
              <Link key={camera.id} to={`camera/${camera.id}`}>
                <li className="form-search__select-item" tabIndex={camera.id}>{camera.name}</li>
              </Link>))}
        </ul>
      </form>
      <button className="form-search__reset"
        style={{ display: request.length < 1 ? 'none' : 'block'}}
        type="reset"
        onClick={()=>{
          setRequest('');
        }}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>

  );
}

export default FormSearch;
