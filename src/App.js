import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import image1 from './images/bgtrial1.jpg'
function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen "
      style={{ backgroundImage: `url(${image1})` }}>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-300 p-8">
          <div className="max-w-md w-full space-y-8">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
