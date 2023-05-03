
function login(){
    let us =document.getElementById('user').value
    let pas =document.getElementById('pass').value
    if(us='admin'&& pas=='123'){
        window.location='qlsp.html';
    }
    else{
        alert('Sai tên đăng nhập')
    }
    
}
