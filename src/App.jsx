import { Outlet } from 'react-router-dom'
import TituloContextProvider from "./context/TituloContext";
import Navbar from './components/Navbar/Index'
import MenuMobile from './components/MenuMobile/Index';

function App() {

  return (
    <div className="App">
      < TituloContextProvider>
        <Navbar />
        <Outlet />
        <MenuMobile />
      </TituloContextProvider>
    </div>
  )
}

export default App;
