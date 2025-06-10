(()=>{

    class Avenger {

        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name =name;
            this.power= power;
        }

    }

    const hulk= new Avenger('Hulk', 9001);
    console.log(hulk);


    class FlyingAvengers extends Avenger{
        flying;

        constructor(name,power){
            super(name,power) // Llama al super constructor / el constructor de Avenger
            this.flying = true;
        }
    }

    const falcon = new FlyingAvengers('falcon', 50);
    console.log({falcon});


})()