import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './components/shared/singleProduct/SingleProduct';
import IndividualOffer from './pages/IndividualOffer';
import PaymentSuccessPage from './pages/PaymentSuccessPage'; 
import FailedPayment from './pages/FailedPaymentPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="individualoffer" element={<IndividualOffer />} />
          <Route path="paymentsuccessage" element={<PaymentSuccessPage />} /> 
          <Route path="failedpayment" element={<FailedPayment />} />
          <Route path="products/:slug" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
