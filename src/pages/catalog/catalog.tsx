import Header from '../../components/header';
import Banner from '../../components/banner';
import Breadcrumbs from '../../components/breadcrumbs';
import CatalogCards from '../../components/catalog-cards';
import Footer from '../../components/footer';

function Catalog(): JSX.Element {

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
                  <CatalogCards />
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
