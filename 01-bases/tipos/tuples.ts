(()=>{

    // Indica que el primer valor siempre va a ser un string y el segundo un número
    const hero:[string, number, boolean] = ['Dr. Strange',100, true];

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = true;

    console.log({hero});
    
})()