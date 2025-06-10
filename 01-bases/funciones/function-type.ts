(()=>{

    // const addNumber0 = (a:number, b:number) => {
    //     return a + b;
    // }

    // Esto hace lo mismo de la función de arriba
    const addNumber = (a:number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    // let myFunction;
    // myFunction=10;
    // console.log(myFunction);



    let myFunction: (y:number, x:number) => number;
    myFunction = addNumber;
    console.log(myFunction(1,2))


    let myFunction2: (y:string) => string;
    myFunction2 = greet;
    console.log(myFunction2('richard'))


    let myFunction3: () => string;
    myFunction3 = saveTheWorld;
    console.log(myFunction3())


})()