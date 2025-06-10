(()=> { 

    // Para controlar la manera en que las instancias son ejecutadas
    // Para el uso de singleton

    class Apocalipsis {

        static instance: Apocalipsis

        constructor( public name: string ){

            

        }
        static callApocalipsis(): Apocalipsis{
            if ( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único')                
            }
            return Apocalipsis.instance; 
        }

        changeName(newName: string):void{
            this.name = newName;
        }
    }

    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... el único');

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');
    


    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

})()