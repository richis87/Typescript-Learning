(()=>{

    const hero:string = 'Flash';

    function returnName():string{
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñal activada';
    }

    // retorna function
    console.log(typeof(activateBatisignal));

    const heroName = returnName();

})()