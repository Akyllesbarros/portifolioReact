
import React,{useState} from 'react';
import './App.css';
// import { Modal } from './components/Modal';


const caseList = [{
    id: 1,
    nameCase: "The Crab",
    imageUrl: "https://wallpapercave.com/wp/wp2532627.jpg",
    Github: "https://www.youtube.com/embed/tMzpLnQtVuE",
    description: "Chame os amigos e joguem juntos. O Dota é um jogo complexo e em constante evolução, mas nunca é tarde demais para começar. Aprenda o básico jogando cooperativamente contra bots. Aprimore as suas habilidades no modo de teste de heróis. Entre de cabeça no sistema de criação de partidas, que usa o seu comportamento e nível de habilidade para garantir que você jogará com os jogadores certos a cada partida.",
  },
];  

export default function Case () {

  const [selectItem,setSelectItem] = useState();
  const [caseList, setGameList] = useState(); 
  const [showModal,setShowModal] = useState(false);
  const selected =(item) =>{
    setSelectItem(item);
    setShowModal(true);
  }
    return (
      <>
        <div className="">
            <div className="cardContent">
            <ul>
                {caseList.map((f) => (
                    <li key={f.id}>
                        <h3>{f.nomeJogo}</h3>
                        <img src={f.imagemUrl} alt={"Capa do Jogo" + f.nomeJogo}/>
                        {/* <button onClick={()=>selected(f)}>Saiba Mais</button> */}
                    </li>
                ))}
            </ul>
            </div>
            {/* <Modal selectedGame={selectItem} showModal={showModal} setShowModal={setShowModal} /> */}
        </div>
      </>
    );
};
