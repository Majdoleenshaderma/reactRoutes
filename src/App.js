import './App.css';
import HOME from './home';
import Products from './products';
import Payment from './payment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HOME />} />
        </Routes>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
        <Routes>
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
