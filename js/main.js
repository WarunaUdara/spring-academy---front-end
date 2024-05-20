var buttonClickedCount=0;
function register() {
    if(buttonClickedCount>0){
        document.getElementById("btnRegister").disabled=true;
        return;
    }
    buttonClickedCount++;
    let requestBody= mapRequest();
  
  fetch("http://localhost:8080/student",{
    method:"POST",
    body: JSON.stringify(requestBody),
    headers: {
        "Content-type":"application/json"
    }
  })
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
  });
  clearData();
  document.getElementById("btnRegister").disabled=true;
  window.alert("Student Registered succesfully");


}
function mapRequest(){
    let requestBody = {
        firstName: undefined,
        lastName: undefined,
        age: undefined,
        email: undefined,
        province: undefined,
      };
      requestBody.firstName=document.getElementById("txt-first_name").value;
      requestBody.lastName=document.getElementById("txt-last-name").value;
      requestBody.age=parseInt(document.getElementById("txt-age").value);
      requestBody.email=document.getElementById("txt-email-address").value;
      requestBody.province=document.getElementById("select-box").value;
      console.log(requestBody);

      return requestBody;
}
function clearData(){
    document.getElementById("txt-first_name").value="";
    document.getElementById("txt-last-name").value="";
    document.getElementById("txt-age").value="";
    document.getElementById("txt-email-address").value="";
    document.getElementById("select-box").value="Select your province";

}
