import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Index'
import MenuMobile from './components/MenuMobile/Index';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <MenuMobile/>
    </div>
  )
}

export default App;
