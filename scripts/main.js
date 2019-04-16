
function signUP(){
    let email = document.querySelector("#userEmail").value;
    let password = document.querySelector("#userPassword").value;
    if(email!="" && password!=""){
        POST = [email,password];
        console.log(POST);
    }else{
        let element = document.querySelector("#alert-box");
        element.removeAttribute("hidden");
        setTimeout(()=>{
            element.setAttribute("hidden","");
        },5000);
    }
}