
import React,{useState} from 'react';
import './case.css';
import mycrab from '../../Images/eu.jpg'

const caseList = [{
    id: 1,
    nameCase: "The Crab",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0q4qdmgu9jKt1sWYz99RHPuOrq427JpwHvOWwjlIvRX4hJ-XLDcpYR9itemhEhmulD1Ahs&usqp=CAU',
    Github: "https://github.com/Akyllesbarros/projetoiteminal_modulo01-blueedtech.git",
    description: "Projeto iteminal do curso de certiitemicação da Blue EdTech apresentado avaliação do iteminal do módulo I - Lógica de programação - sobre um jogo de itemicção interativa usando todos os conceitos aprendidos no decorrer do módulo. Como requisito obrigatório, neste projeto itemoi itemeito o uso de classe. O trabalho itemoi desenvolvido em grupo..",
  },
];  

export default function Case(){

  const [nex, setNext] = useState();
  const [GameList, setGameList] = useState(caseList.sort((a, b) => (a.nameCase > b.nameCase ? 1 : -1))); 


  // const next =() =>{
    

  // }
  GameList.map(item => console.log(item))
  return (
    <>
      <div className="cardContent">
            <ul>
                {GameList.map((item) => (
                    <li key={item.id}>
                        <h3>{item.nameCase}</h3>
                        <img src={item.imagemUrl} alt={item.nameCase}/>
                    </li>
                ))}
                {/* <button onClick={()=>}>---></button> */}
            </ul>
            </div>
          
    </>

  )
}
