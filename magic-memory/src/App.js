import "./App.css";
import { useState } from "react";

// Create Array of Cards, Is Constant, Dont need comp
// Won't get re-created every render if made outside comp
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);


  // Duplicate Each Card
  // Randomize order of cards in array
  // Apply random id for each card
  const shuffleCards = () => {
    // Spread syntax, will place each element in array
    // Will do again with second refenence
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // Fire function for each pair of items in array, if return less than 0, then order stays the same, if greater than 0, then order of compared items swapped
      .map((card) => ({ ...card, id: Math.random() }));
    // For each element, fire function that adds id prop & value
    // card represents element in scope, gets properties, then adds id property

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards,turns);

  return (
    <div className="App">
      <h1>Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
