    var userone = 'Kevin'
    var usertwo = 'Luana'
    var senha = 'S3nh@'

function acesso(form) {


    if(form.user.value == userone && form.senha.value == senha || form.user.value == usertwo && form.senha.value == senha){
        alert('Welcome!')
        location = "principal.html"
    }

    else{
        alert('Dados inválidos!!!')
    }
}

