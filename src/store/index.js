import { createStore } from 'vuex'

export default createStore({
  state: {
    wallet: [
      {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: 'btc.jpg'},
      {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: 'eth.png'},
      {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: 'doge.png'},
      {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: 'link.png'},
    ],

    favCounter :0,
    Favorite_Movies:[],
    Movies:[
      {MovieName: 'La Casa de Papel',type:'Series', imgPath: 'lacasadePapel.png'},
      {MovieName: 'Venom (2018)', type:'Movie', imgPath: 'Venom.png'},
      {MovieName: 'Black Panther (2018)', type:'Movie', imgPath: 'BlackPanther.png'},
      {MovieName: 'Tenet (2020)',type:'Movie', imgPath: 'Tenet.png'},
      {MovieName: 'ProjectPower',type:'Movie', imgPath: 'ProjectPower.png'},
      {MovieName: 'Stranger Things',type:'Series', imgPath: 'strangerThingsS2.png'},
      {MovieName: 'The Witcher',type:'Series', imgPath: 'theWitcher.png'},
      {MovieName: 'After (2019)',type:'Movie', imgPath: 'After.png'},
      {MovieName: 'MoonLight',type:'Movie', imgPath: 'MoonLight.png'},
      {MovieName: 'Us (2019)',type:'Movie', imgPath: 'Us.png'},
      {MovieName: 'Game Of thrones',type:'Series', imgPath: 'GameOfThrones.png'},
      {MovieName: 'The Hill',type:'Movie', imgPath: 'TheHill.png'},
      {MovieName: 'Avengers Infinity War',type:'Movie',imgPath: 'AvengersInfinityWar.png'},
      {MovieName: 'John Wick', type:'Movie',imgPath: 'JohnWick.png'},
      {MovieName: 'Joker (2019)', type:'Movie',imgPath: 'Joker.png'},
      {MovieName: 'Harry Potter',type:'Movie', imgPath: 'Harrypotter.png'},
      {MovieName: 'IT (2017)', type:'Movie', imgPath: 'It.png'},
      {MovieName: 'Maze Runner Death Cure',type:'Movie', imgPath: 'Mazerunner3.png'},
      {MovieName: 'Mortal Kombat',type:'Movie', imgPath: 'MortalKombat.png'},
      {MovieName: '1917 (2019)',type:'Movie', imgPath: '1917.png'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
