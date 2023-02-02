<template>
  
    <div fluid data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000">
      <div id="main">
        <div class="texte">
          <div class="col text-center d-flex justify-content-center">
           
          </div>
          <h1 class="my-3">Erreur </h1> 
           <h3 class="mb-10">Ressource introuvable !</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      //   retour(){
      //       this.$router.go(-1)
      //   }
    },
  };
  </script>
  <style scoped>
  * {
    transition: all 0.6s;
  }
  
  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
  #main {
    display: table;
    width: 100%;
    height: 40vh;
    text-align: center;
    justify-content: center;
  }
  
  .texte {
      color : #027C69;
      display: table-cell;
      vertical-align: middle;
  }
  
  .texte h1 {
      background-color: white;
      font-size: 50px;
      display: inline-block;
      padding-right: 12px;
      animation: type 0.5s alternate infinite;
  }
  .texte h3 {
      background-color: #027C69;
      color:white;
      margin-left: 10px;
      font-size: 50px;
      display: inline-block;
      padding-right: 12px;
  }
  </style>