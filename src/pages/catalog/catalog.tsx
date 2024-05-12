import Header from '../../components/header';
import Banner from '../../components/banner';
import Breadcrumbs from '../../components/breadcrumbs';
import CatalogCards from '../../components/catalog-cards';
import Footer from '../../components/footer';

import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchListCameras } from '../../store/api-actions';
import { store } from '../../store';

function Catalog(): JSX.Element {

  useEffect(()=>{
    store.dispatch(fetchListCameras());
  }, []);


  const cameras = useAppSelector((state)=>state.cameras);

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
                  <CatalogCards cameras={cameras} />
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
