import './App.css'

import ManageData from "./components/ManageData";
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

import Road from "./assets/img_1.jpg";
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar:true, km: 0},
    {id: 2, brand: "Ford", color: "Preto", newCar:false, km: 10_000},
    {id: 3, brand: "Chevrolet", color: "Branco", newCar:false, km: 50_000},
  ];

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
      brand = {car.brand} 
      color = {car.color} 
      km = {car.km}
      newCar = {car.newCar}  
      />
    ))}
    </>
  );
};

export default App;
