import './HomePage.css'
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Advice from "../../components/Advice/Advice"
import Fact from "../../components/Fact/Fact"
import Joke from "../../components/Joke/Joke"

export default function HomePage () {
  const [newAdvice, setNewAdvice] = useState(false);
  const [newFact, setNewFact] = useState(false);
  const [newJoke, setNewJoke] = useState(false);

  function handleSetNewAdvice() {
    setNewAdvice(!newAdvice);
  }

  function handleSetNewJoke() {
    setNewJoke(!newJoke);
  }

  function handleSetNewFact() {
    setNewFact(!newFact);
  }

  return (
    <>
      <div className="center">

      <div className="button">
      <Button onClick={handleSetNewAdvice}>Get New Advice</Button>
      {newAdvice && (
        <Advice 
        handleSetNewAdvice={handleSetNewAdvice}
        />
      )}
      </div>

      <div className="button">
      <Button onClick={handleSetNewFact}>Get New Fact</Button>
      {newFact && (
        <Fact 
        handleSetNewFact={handleSetNewFact}
        />
      )}
      </div>

      <div className="button">
      <Button onClick={handleSetNewJoke}>Get New Joke</Button>
      {newJoke && (
        <Joke 
        handleSetNewJoke={handleSetNewJoke}
        />
      )}
      </div>

      </div>
    </>
  );
}
