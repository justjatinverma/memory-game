document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: '1',
        img: 'images/1.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/2.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/3.jpg'
      },
      {
        name: 'pizza',
        img: 'images/4.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/5.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/6.jpg'
      },
      {
        name: '1',
        img: 'images/1.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/2.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/3.jpg'
      },
      {
        name: 'pizza',
        img: 'images/4.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/5.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/6.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  