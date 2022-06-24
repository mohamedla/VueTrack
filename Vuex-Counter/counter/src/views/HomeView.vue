<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="buttons">
      <button @click="$store.commit('decrese')">-</button>
      <button @click="$store.commit('increse')">+</button>
    </div>
  </div>
</template>

<style>
  .home{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-items: center;
  }
  .counter, .buttons{
    margin: 2rem;
  }
  .counter{
    font-size: 5rem;
    border: 3px solid black;
    border-radius: 5px;
    width: 50vh;

  }
  button{
    width:20vh;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>
