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
          <Route path='/add-note' element={<AddNotes/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
