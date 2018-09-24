document.addEventListener('DOMContentLoaded', () => {
    // resgistro
    var regisname = document.querySelector('.namer')
    var regisapellido = document.querySelector('.apellir')
    var regiscorreo = document.querySelector('.correor')
    var repas = document.querySelector('.recontraseñar')
    var regisbtnregistro = document.querySelector('.btnrgistro')

    const $formLogin = document.querySelector('#form-login')
    var body = document.querySelector('body')
    var num1 = 0, num2 = 0, num3 = 0, num4 = 0;
    var num5 = 0, num6 = 0;

    repas.addEventListener('keypress', (e) => {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 13) {
            enviar();
        }
    })
    regisbtnregistro.addEventListener('click', enviar = (event) => {
        const formData = new FormData($formLogin)

        var dniper = formData.get('dni');
        var nombreper = formData.get('nombre');
        var apellper = formData.get('apellidos');
        var telper = formData.get('telefono');
        var correoper = formData.get('correo');
        var regiscontraseña = formData.get('pass');
        var regisrecontraseña = formData.get('repass');

        if (dniper === "") {
            alert('falta el Documento')
        } else { num1 = 1 }
        if (nombreper === "") {
            alert('falta el nombre')
        } else { num2 = 1 }
        if (apellper === "") {
            alert('faltan los apellidos')
        } else { num3 = 1 }
        if (telper === "") {
            alert('falta el telefono')
        } else { num4 = 1 }
        if (correoper === "") {
            alert('falta el email')
        } else { num5 = 1 }
        if (regiscontraseña === "") {
            alert('falta la contraseña')
        } else { num6 = 1 }

        if (num1 === 1 & num2 === 1 & num3 === 1 & num4 === 1 & num5 === 1 & num6 === 1) {
            if (regiscontraseña === regisrecontraseña) {
                writePerfilData(nombreper, apellper, telper, correoper);
                alert('Ha sido guardo correctamente')
                // crearUsuario();
                location.href ="principalPage.html";
            } else {
                alert('Las contraseñas no son iguales')

            }
        }
    })
    // 
    // 
    // 
    crearUsuario = () => {
        autenticacion.createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then((success) => {
                const uniqueId = DeviceInfo.getUniqueID();
                const miid = autenticacion.currentUser.uid;
                //AHORA LOS DEMAS DATOS A LA BD @ 

                this.storeDataUser(this.state.username);
                Toast.show(Idioma.t('registerOk'), Toast.LONG);
                this.props.navigation.navigate('Login')
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/invalid-email') {

                    Toast.show(Idioma.t('passsecurity'), Toast.LONG);
                } else if (errorCode === 'auth/weak-password') {
                    Toast.show(Idioma.t('passsecurity'), Toast.LONG);
                } else if (errorCode === 'auth/email-already-in-use') {
                    Toast.show(Idioma.t('emailused'), Toast.LONG);
                } else if (errorCode === 'auth/network-request-failed') {
                    Toast.show(Idioma.t('conexionerror'), Toast.LONG);
                } else {
                    Toast.show(errorMessage, Toast.LONG);
                }
            });
    }

})