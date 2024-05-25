import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    //Its creating a new array and takes all existing elements from animals and add random animal at end
    setAnimals([...animals, getRandomAnimal()]);

    //We could have done like below but it modifies peice of state
    //animals.push(getRandomAnimal());
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}
