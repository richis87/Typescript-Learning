function printToConsole(construc: Function ) {
    console.log( construc )
}

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor: Function ) {
    // seal se usa para bloquear. Se usa para no extender propiedades de una clase
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function CheckValidPokemonId() {
    // Ya todo viene con el javascript, en versiones nuevas
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
  
        //console.log({target, propertyKey, descriptor});

        // console.log(descriptor.value);
        const originalMethod = descriptor.value;

        descriptor.value = ( id:number) => {
            // console.log('Hola Mundo');
            // console.log(id);

            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                    return originalMethod(id)
            }
        }

    }
}



function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string){

        //console.log({target, propertyKey, descriptor});
        
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this )
                return 'Fernando'
            },
            set( this, val ){
                // console.log(this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}



@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.co'
    public as:string = 'fsdfs'

    constructor(
        public name: string  
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`);
    
    }
}

