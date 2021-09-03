import './app.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Missao from './Components/Missao/Missao';
import Sobre from './Components/Sobre/Sobre';
import Separador from './Components/Separador/Separador';
// import Case from './Components/Case/Case'

export default function App() {
  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <Separador/>
      <Sobre/>
      <Separador/>
      <Missao/>
      {/* <Case></Case> */}
    </>
  );
}


