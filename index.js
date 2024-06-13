function sendMail(){
    var paramas ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }


const serviceID= "service_erbvsxn";
const temlateID="template_1zjutj2";


emailjs.send(serviceID,temlateID,paramas)
.then(
    res=>{
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("message").value=""
        console.log(res);
        alert("your messege sent success fully")
    })

    .catch((err)=> console.log(err));

}