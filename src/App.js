import {HashRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Pokedex from './Components/Pokedex';
import PokedexInfo from './Components/PokedexInfo';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex'  element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokedexInfo/>}/>
      </Route>
     
      </Routes>    
    </div>
    </HashRouter>
  );
}

export default App;
