import React, { useEffect, useState } from "react";
import { RANDOM_SINGLECARD } from "../helpers/api";
import { Card } from "./Card";
import "./CardsContainer.css";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CardsContainer = () => {
  const [card, setCard] = useState();
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullDeck, setFullDeck] = useState(false)  

  useEffect(() => {
    console.log("Se agrego una carta");
    console.log(card);
    console.log(deck);
    setLoading(false);

  }, [card, deck]);

  const getCard = () => {
    if(deck.length === 40) {
      setFullDeck(true)
      return;
    }
    setLoading(true);

    fetch(RANDOM_SINGLECARD, {})
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setDeck([data, ...deck]);
        console.log(deck.length)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="cards-container-comp">
      <div className="container-box">
        <div className="container-title">
          <h2>DECK:</h2>
        </div>
        <div className="btn-container">
          <button className="get-random-card-btn" onClick={() => getCard()}>
            Get a random card
          </button>
          {<Message msgContent={`Cards: ${deck.length}/40`}/>}
        </div>
        <div className="deck-container">
          {loading && <Loader />}

          {deck && deck.map((card) => 
          <Card key={card.id} cardData={card} />)}
        </div>
      </div>
    </div>
  );
};
