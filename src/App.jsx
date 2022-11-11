import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Index';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App;
