console.log(1);
console.log(2);
console.log(3);
doSomething();
setTimeout(() => {
    console.log('lazy logged');
}, 4000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(5);

function doSomething(){
    console.log(4);
}