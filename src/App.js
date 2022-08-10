import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import AddNote from './component/AddNote/AddNote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-note' element={<AddNote />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
