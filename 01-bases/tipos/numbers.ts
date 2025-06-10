(()=>{

    let avengers: number = 10;
    console.log(avengers)

    const villanos: number = 20

    if ( avengers < villanos ) {
        console.log('Estamos en problemas');
    }
     else{
        console.log('Nos salvamos');
    }

    avengers = 123
    console.log({avengers})

    avengers = Number('55A') //NaN: Not a Number
    console.log({avengers})


})()