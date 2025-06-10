(()=>{

    // String con comilla simple es mas liviano
    const batman:string = 'Batman\'s';
    const batman2:any = 'Batman\'s';
    const linternaverde = "Linterna's verde";
    const volcanNegro = `Héroe: Volcán Negro`;

    console.log(`I'm ${batman}`)
    console.log( batman.toUpperCase() )
    console.log( batman[10]?.toUpperCase() || 'No está presente' )

})()