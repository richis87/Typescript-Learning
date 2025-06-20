(()=> { 

    interface Hero {
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


    let superman: Hero = {
        name:   'Clark Kent',
        age:    60,
        powers: ['super velocidad'],
        getName(){
                return this.name;
            }
    }

    superman.age
})