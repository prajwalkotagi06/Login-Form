let user = document.getElementById('user');
let pass = document.getElementById('pass');
function submit(){
    let username = user.value;
    let password = pass.value;
    if(username === "" && password === ""){
        alert('Please Fill The Form');
    }
    else if(username === 'prajwal' && password === '123'){
        alert('login sussessfully');
    }
    else{
        alert('Login Failed')
    }
}