crearUsuario=()=>{ 
    autenticacion.createUserWithEmailAndPassword(this.state.username,this.state.password) 
    .then((success)=>{ 
    const uniqueId = DeviceInfo.getUniqueID();
    const miid=autenticacion.currentUser.uid;
    //AHORA LOS DEMAS DATOS A LA BD @ 
    
    this.storeDataUser(this.state.username); 
    Toast.show(Idioma.t('registerOk'), Toast.LONG);
    this.props.navigation.navigate('Login') 
    })
    .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message; 
    if(errorCode==='auth/invalid-email'){ 
   
   Toast.show(Idioma.t('passsecurity'), Toast.LONG); 
    }else if(errorCode==='auth/weak-password'){
    Toast.show(Idioma.t('passsecurity'), Toast.LONG); 
    }else if(errorCode==='auth/email-already-in-use'){
    Toast.show(Idioma.t('emailused'), Toast.LONG); 
    }else if(errorCode==='auth/network-request-failed'){
    Toast.show(Idioma.t('conexionerror'), Toast.LONG); 
    }else{
    Toast.show(errorMessage, Toast.LONG);
    }
    }); 
    }