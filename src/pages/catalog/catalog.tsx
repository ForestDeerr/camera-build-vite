import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs';
import CatalogCards from '../../components/catalog-cards';
import Footer from '../../components/footer';
import CatalogSort from '../../components/filterAndSort/catalog-sort';
import CatalogFilters from '../../components/filterAndSort/catalog-filters';

import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchListCameras, fetchPromos } from '../../store/api-actions';
import { store } from '../../store';

function Catalog(): JSX.Element {

  useEffect(()=>{
    store.dispatch(fetchListCameras());
    store.dispatch(fetchPromos());
  }, []);


  const cameras = useAppSelector((state)=>state.cameras);

  const [diplayedCameras, setDiplayedCameras] = useState(cameras);
  const [sortOrder, setSortOrder] = useState('minToMax');
  const [sortType, setSortType] = useState('price');

  const defaultCamerasSorting = [...cameras].sort((a, b) => a.price > b.price ? 1 : -1);


  useEffect(()=>{
    setDiplayedCameras(defaultCamerasSorting);
  }, [cameras]
  );


  if(cameras.length === 0) {
    return <> Loading</>;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <CatalogFilters
                    diplayedCameras={diplayedCameras} setDiplayedCameras={setDiplayedCameras}
                    cameras={cameras} sortOrder={sortOrder} sortType={sortType}
                  />
                </div>
                <div className="catalog__content">
                  <CatalogSort diplayedCameras={diplayedCameras} setDiplayedCameras={setDiplayedCameras} sortOrder={sortOrder} setSortOrder={setSortOrder} sortType={sortType} setSortType={setSortType} />
                  <CatalogCards cameras={diplayedCameras} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
