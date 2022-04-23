// https://db.ygoprodeck.com/api-guide/

export const SINGLE_CARD = (cardName) => {
  return `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
};

export const SINGLE_CARD_ARCHETYPE = (cardName) => {
  return `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${cardName}`
}

export const RANDOM_SINGLECARD =  
   `https://db.ygoprodeck.com/api/v7/randomcard.php`;
