import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import MainContainer from './components/home/MainContainer';
import Sidebar from './components/home/Sidebar';
import store from './components/redux/store';
import {Provider} from "react-redux";
import WatchPage from './components/home/WatchPage';

function App() {
  return (
    <div  className=''>
      <Provider store={store}>
      <Header />
      <div className='d-flex '>
      <Sidebar/>
         {/* <MainContainer/> */}
         {/* <Outlet/> */}
      </div>
      
     
      <Routes>     
         <Route path="/" element={<MainContainer/>}/>
         <Route path="/watch" element={<WatchPage/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
