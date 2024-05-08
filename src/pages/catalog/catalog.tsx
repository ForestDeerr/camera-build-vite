import Header from '../../components/header';
import Banner from '../../components/banner';
import Breadcrumbs from '../../components/breadcrumbs';

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
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}

export default Catalog;
