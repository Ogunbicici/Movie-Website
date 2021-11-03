<template>
  <div class="Coinrow" v-for="(coin, index) in storewallet" :id="index">
    <img :src="require('../assets/' + coin.logoPath)">
    <p>{{coin.name}}</p>
    <p> coins owned: {{coin.amountOwned}}</p>
    <input type="number" class="inputAmount">
    <button class="buyBtn" @click="Buy(index)">Buy</button>
    <button class="sellBtn" @click="Sell(index)">Sell</button>
  </div>

</template>

<script>
export default {
  name: "BitcoinComp",
  data(){
    return{
    }
  },
  computed: {
    storewallet(){
      return this.$store.state.wallet;
    }
  },
  methods:{
    Buy(index){
      this.$store.state.wallet[index].amountOwned = parseFloat(this.$store.state.wallet[index].amountOwned) + parseFloat(document.querySelectorAll(".inputAmount")[index].value);
      this.$store.state.wallet[index].amountOwned = this.$store.state.wallet[index].amountOwned.toFixed(3);
    },
    Sell(index){
      if (this.$store.state.wallet[index].amountOwned >= document.querySelectorAll(".inputAmount")[index].value){
        this.$store.state.wallet[index].amountOwned = parseFloat(this.$store.state.wallet[index].amountOwned) - parseFloat(document.querySelectorAll(".inputAmount")[index].value);
      }
      else {
        alert('You broke!')
      }
    },
  },
}
</script>

<style scoped>
img{
  width: 75px;
}
.Coinrow{
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
}
.Coinrow button{
  width: 90px;
  height: 50px;
}
.Coinrow input{
  width: 90px;
  height: 50px;
}
</style>