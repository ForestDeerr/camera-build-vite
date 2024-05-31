import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';
import Camera from '../pages/camera/camera';
import Error404 from '../pages/errors/error-404';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='camera/:id' element={<Camera />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
