(()=> { 

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick:'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision:'Paul Bettany',
        activo:true,
        poder: 1500.123123   
    }

    // Destructuración
    const { poder, vision } = avengers
    console.log( poder.toFixed(2), vision.toUpperCase() );

    // Sin el type Avengers
    const printAvenger = ( avengers:{
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    } ) => {
        console.log( avengers.vision )
    }

    printAvenger(avengers);

     // Con el type Avengers
    const printAvenger2 = ( { ironman, ...resto }:Avengers  ) => {
        console.log( ironman, resto )
        console.log( ironman, resto.nick )
    }

    printAvenger2(avengers);

    const AvengersArr = ['Cap.America','Ironman','Hulk'];

    // Sin desestructuración
    const ironman = AvengersArr[1];
    console.log(ironman)
    
    // Con desestructuración
    const [,iron] = AvengersArr;
    console.log({iron});

    const [,,h] = AvengersArr;
    console.log({h});

    const AvengersArr2: [string, boolean, number] = ['Cap.America',true,150.15];
    const [cap,ironma,seriaUnNumero] = AvengersArr;
    console.log({cap,ironma,seriaUnNumero});


})()