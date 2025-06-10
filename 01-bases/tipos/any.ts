(()=>{

    let avenger: any = 123;
    // Las constantes siempre deben estár inicializadas
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    // Resultado D

    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    // Resultado 150.23/

    console.log(exists);
    // Resultado undefined

    console.log(power);
    // Resultado undefined

    //casting a string
    avenger = 'Dr. Strange';
    console.log( ( avenger as string).charAt(0));
    // Resultado D


    //casting a number
    avenger = 150.23256415;
    console.log( ( <number>avenger ).toFixed(2));
    // Resultado 150.23/

     //casting a number
     avenger = 150.23256415;
     console.log(  <number>avenger.toFixed(2));
     // Resultado 150.23/

})()