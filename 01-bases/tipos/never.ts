(()=> {

    // Al ajecutar esta función el código no continúa mas
    const abc = (message: string):never => {
        throw new Error (message)
    }

    // Se pueden especificar dos puntos de retorno
    const abc2 = (message: string):(never|number) => {

        if( false ){
            throw new Error (message)
        }
        return 1;     
    }

    abc("Auxilio");

    // Este código no se va a ejecutar ya que se ejecutó el never
    console.log('Hola')

})()