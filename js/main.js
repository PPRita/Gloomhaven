$(document).ready(()=>{
 
    $('.imgIcon').on('click', ()=>{
        $(event.currentTarget).removeClass('activeIcon');
        $(event.currentTarget).toggleClass('imgIcon')
    });

});






//HP
function addHP() {
    let hp = parseInt(document.getElementById('hpValue').innerHTML) + parseInt(1);
    document.getElementById('hpValue').innerHTML = hp;
  document.getElementById('hpValue').innerHTML = hp;
  }

  function removeHP() {
      let hp = parseInt(document.getElementById('hpValue').innerHTML) - parseInt(1);
      console.log(hp);
      document.getElementById('hpValue').innerHTML = hp;
  }


//XP
  function addXP() {
    let xp = parseInt(document.getElementById('xpValue').innerHTML) + parseInt(1);
    document.getElementById('xpValue').innerHTML = xp;
  document.getElementById('xpValue').innerHTML = xp;
  }

  function removeXP() {
      let xp = parseInt(document.getElementById('xpValue').innerHTML) - parseInt(1);
      console.log(xp);
      document.getElementById('xpValue').innerHTML = xp;
  }


//GOLD
  function addGOLD() {
    let gold = parseInt(document.getElementById('goldValue').innerHTML) + parseInt(1);
    document.getElementById('goldValue').innerHTML = gold;
  document.getElementById('goldValue').innerHTML = gold;
  }

  function removeGOLD() {
      let gold = parseInt(document.getElementById('goldValue').innerHTML) - parseInt(1);
      console.log(gold);
      document.getElementById('goldValue').innerHTML = gold;
  }


//CARD HAND
function addCardHand() {
    let cHand = parseInt(document.getElementById('cardHand').innerHTML) + parseInt(1);
    document.getElementById('cardHand').innerHTML = cHand;
  document.getElementById('cardHand').innerHTML = cHand;
  }

  function removeCardHand() {
      let cHand = parseInt(document.getElementById('cardHand').innerHTML) - parseInt(1);
      console.log(cHand);
      document.getElementById('cardHand').innerHTML = cHand;
  }


//CARDS
  function addCards() {
    let card = parseInt(document.getElementById('cards').innerHTML) + parseInt(1);
    document.getElementById('cards').innerHTML = card;
  document.getElementById('cards').innerHTML = card;
  }

  function removeCards() {
      let card = parseInt(document.getElementById('cards').innerHTML) - parseInt(1);
      console.log(card);
      document.getElementById('cards').innerHTML = card;
  }


//CARD FIRE
function addCardFire() {
    let cFire = parseInt(document.getElementById('cardFire').innerHTML) + parseInt(1);
    document.getElementById('cardFire').innerHTML = cFire;
  document.getElementById('cardFire').innerHTML = cFire;
  }

  function removeCardFire() {
      let cFire = parseInt(document.getElementById('cardFire').innerHTML) - parseInt(1);
      console.log(cFire);
      document.getElementById('cardFire').innerHTML = cFire;
  }
