import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header';
import {Routes , Route} from 'react-router-dom'
import Home from './component/Home';
import AddNotes from './component/AddNotes';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/add-note' element={<AddNotes/>} />
          <Route path='*' element={<div><h3 className='text-danger text-center mt-5'> oooops! Did not match any pages.</h3></div>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
