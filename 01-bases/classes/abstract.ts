(()=> { 

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }
    class Xmen extends Mutante {

        salvarMundo(){
            return 'Mundo a salvo!';
        }

    }
    class Villian extends Mutante {

        ConquistarMundo(){
            return 'Mundo conquistado';
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    

    // console.log(wolverine)
    // console.log(wolverine.salvarMundo())
    
    // console.log(magneto)
    // console.log(magneto.ConquistarMundo())

    // const printName = (character:Mutante) => {
    //     console.log( character.realName )
    // }

    // printName(wolverine);


})()