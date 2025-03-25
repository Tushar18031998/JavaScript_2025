(function chai(){ //named iife
    console.log(`db Connected`)
})();

((name) => { // unnamed iife
  console.log(`DB CONNECTED TWO ${name}`);
})("tushar");
