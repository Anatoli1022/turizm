import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLoyout from './layouts/MainLoyout';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './components/shared/singleProduct/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoyout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
