import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [sortData, setSortData] = useState("")
  return (
    <div className="App">
      <Navbar setSortData={setSortData}/>
      <ProductList sortData={sortData}/>
    </div>
  );
}

export default App;
