
import './App.css';
import Login from './components/Login';
import {Route, Routes} from "react-router-dom" 
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/feed' element={<Feed/>}></Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
