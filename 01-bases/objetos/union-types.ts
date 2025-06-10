(()=> { 

    type Hero ={
        name:string;
        age:number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: ( string | number | Hero ) = 'Richard';

    console.log(myCustomVariable);
    myCustomVariable = 20

    console.log(myCustomVariable);


    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }

    // Prueba

    console.log(myCustomVariable);

})()