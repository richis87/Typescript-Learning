(()=> {

    // Typescript valida que se reciba todos los parámetros de la función
    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony','Stark')

    console.log({name});

})()