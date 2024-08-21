import React, {  Suspense } from 'react';
import Loading from './landingPage/component/Loading';
import Profile from './landingPage/pages/Profile';
import Login from './landingPage/sub_component/Login';
import Admin from './admin/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const LandingPage = lazy(() => import('./landingPage/LandingPage'));
const Gallery = lazy(() => import('./landingPage/Gallery'));

function App() {
  return (  
    <>
    {/* <Loading /> */}
        <Suspense fallback={<Loading />}>
          <Router>
            
              <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/Gallery' element={<Gallery type={"allProduk"} />}></Route>
                <Route path='/videoFacebook' element={<Gallery type={"videoFacebook"} />}></Route>
                <Route path='/instaStory' element={<Gallery type={"instaStory"} />}></Route>
                <Route path='/videoYoutube' element={<Gallery type={"videoYoutube"} />}></Route>
                <Route path='/Profile' element={<Profile type={"Profile"} />}></Route>
                <Route path='/login' element={<Login type={"Login"} />}></Route>
                <Route path='/admin' element={<Admin type={"Admin"} />}></Route>
              </Routes>
            
          </Router>
        </Suspense>
    </> 
  )
}

export default App
