import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    //Its creating a new array and takes all existing elements from animals and add random animal at end
    setAnimals([...animals, getRandomAnimal()]);

    //We could have done like below but it modifies peice of state
    //animals.push(getRandomAnimal());
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
