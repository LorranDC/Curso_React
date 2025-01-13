import './App.css'
import { useState } from 'react';

import ManageData from "./components/ManageData";
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import Road from "./assets/img_1.jpg";
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetais from './components/UserDetails';

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Ford", color: "Preto", newCar: false, km: 10_000 },
    { id: 3, brand: "Chevrolet", color: "Branco", newCar: false, km: 50_000 },
  ];

  const pessoas = [
    { id: 1, nome: "Leonardo", idade: 48, profissao: "Analista de sistemas" },
    {
      id: 2,
      nome: "Alessandra",
      idade: 43,
      profissao: "Administradora finaceira",
    },
    { id: 3, nome: "Kiko", idade: 4, profissao: "Estudante" },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>

      <div>
        <img src="/img_2.jpg" alt="Paisagem" />
      </div>

      <div>
        <img src={Road} alt="Estrada" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={100_000} color="Azul" newCar={false} />
      <CarDetails brand="Ford" km={50_000} color="Preto" newCar={true} />
      <CarDetails brand="Chevrolet" km={10_000} color="Branco" newCar={false} />

      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      <Fragment propFragment="teste" />

      <Container myValue="testing" >
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="testing 2" >
        <p>E este é o conteúdo</p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/** Desafio 4 */}
      {pessoas.map((pessoa) => (
        <UserDetais
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}

    </>
  );
};

export default App;
