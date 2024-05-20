function getData(){
    fetch("http://localhost:8080/student")
    .then(response=>response.json())
  .then(data=>{
    console.log(data);
  });
}