import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';
import Product from '../pages/product/product';
import Basket from '../pages/basket/basket';
import Error404 from '../pages/errors/error-404';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='camera/:id' element={<Product />} />
        <Route path='/card' element={<Basket />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
