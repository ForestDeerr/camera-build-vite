import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Catalog />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
