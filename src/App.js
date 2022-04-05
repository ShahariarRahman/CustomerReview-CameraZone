import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className='bg-gray-50 h-screen'>
      <Header></Header>
      <div className='max-w-screen-2xl mx-auto'>
        <Routes >
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
