import logo from './logo.svg';
import './App.css';
import AddPokemon from './component/AddPokemon';
import PokemonList from './component/PokemonList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <h1>Pokémon Manager</h1>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<AddPokemon/>}/>
      <Route path ="/list" element={<PokemonList />}/>
    </Routes>
  
    </BrowserRouter>
<ToastContainer/>
   
   
  </div>
  );
}

export default App;
