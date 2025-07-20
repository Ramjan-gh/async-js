function a(){
    console.log('a')
    b();
    console.log('aa');
}
function b(){
    console.log('b')
    console.log('bb');
}
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
a();
b();

