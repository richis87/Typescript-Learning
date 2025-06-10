(()=> { 

    type Hero ={
        name:string;
        age:number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name:   'Barry Allen',
        age:    24,
        powers: ['super velocidad','Viajar en el tiempo']
    }

    // flash = {
    //     name:   'clark Kent',
    //     //age:    60,
    //     powers: ['Super fuerza'],
    //     getName(){
    //          return this.name;
    //      }
    // }


    // console.log(flash.getName())

    let superman: Hero = {
        name:   'Clark Kent',
        age:    60,
        powers: ['super velocidad'],
        getName(){
                return this.name;
            }
    }
    
    

})()