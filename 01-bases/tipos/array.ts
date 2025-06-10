(()=>{

    const number:( string| number | boolean )[] = [1,2,3,4,5,'6',7,8,9,10];
    number.push(true);
    console.log(number);

    const number2: number[] = [1,2,3,4,5,6,7,8,9,10];

    const villans = ['Omega Rojo','Dormammu','Duende Verde'];
    villans.forEach( v => console.log( v.toUpperCase() ) );

})()