import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs';
import CatalogCards from '../../components/catalog-cards';
import Footer from '../../components/footer';
import CatalogSort from '../../components/catalog-sort';

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

  useEffect(()=>{
    setDiplayedCameras([...cameras].sort((a, b) => a.price > b.price ? 1 : -1));
  }, [cameras]
  );

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
                <div className="catalog__aside"><img src="img/banner.png" />
                </div>
                <div className="catalog__content">
                  <CatalogSort diplayedCameras={diplayedCameras} setDiplayedCameras={setDiplayedCameras} />
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
