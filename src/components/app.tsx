import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';
import Camera from '../pages/camera/camera';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='camera/:id' element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
