
const countingButtons = document.querySelectorAll('.player button');
const addPlayerButton = document.querySelector('.add-player');
const counter = document.querySelector('.counter')



// fonction d'ajout d'un compteur 
const addPlayer = function (){
  const player = document.createElement('div');
  player.classList.add('player');
  player.innerHTML = `<input class="playerName" type="text" autocomplete="on" placeholder="Joueur ${counter.childElementCount + 1}" maxlength="15">
  <div class="screen" id="screen-${counter.childElementCount + 1}"> 
  0
  </div>
  <div class="board">
    <button data-counterid="${counter.childElementCount + 1}" class="more">+</button>
    <button data-counterid="${counter.childElementCount + 1}" class="less">-</button>
    <button data-counterid="${counter.childElementCount + 1}" class="reset">0</button>
  </div>`
  counter.appendChild(player);
  // return player;
  
};

// fonction de comptage
const counting = async function(event){ 
  // identification du bouton
  const button = event.target;

  //  obtenir le numéro du joueur
  const counterid = button.dataset.counterid; 

  // selectionner l'écran du bon joueur
  const screen = document.querySelector(`#screen-${counterid}`);

  // récupération de la valeur du screen en number
  const currentValue = parseInt(screen.innerText); 

  if(button.classList.contains('more')) { 
    screen.innerText = `${currentValue + 1}`; 
  }
  else if(button.classList.contains('less') && currentValue > 0) {
    screen.innerText = `${currentValue - 1}`;
  }
  else {
    screen.innerText = '0';
  }
}


// ecoute du clique
addPlayerButton.addEventListener('click', addPlayer);

countingButtons.forEach(button => {
  button.addEventListener('click', counting);
  
});


