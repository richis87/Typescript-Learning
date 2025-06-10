(()=> { 

    class Avenger {

        // private name:string;
        // private team: string
        // public realName?: string;
        static avgAge: number = 35; // para tener acceso se usa la definición de la clase, pero sin crear una nueva instancia
        static getAvgAge(){
            return this.name;  //Retorna el nombre de la clase
        }

        constructor(
            private name:string, 
            private team:string, 
            public realName?:string,
            avgAge: number = 55

        ){
            Avenger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} (${this.team})`
        }        
    }

    // const antman:Avenger = new Avenger('Antman','Capitan');
    // console.log( antman, Avenger.avgAge, antman.bio(), Avenger.getAvgAge() )


})()