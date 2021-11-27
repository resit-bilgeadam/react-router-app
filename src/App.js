import {Routes, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import Users from './pages/Users'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import UserDetail from './pages/UserDetail';
import UsersLayout from './layouts/UsersLayout';

function App() {
  return (
    <>
      <Toolbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='/users' element={<UsersLayout />}>
            <Route path=':id' element={<UserDetail />} />
            <Route index element={<Users />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
