(()=>{

    // void es una manera de indicar que la función no tiene retorno

    function callBatman():void {
        return;   
    }

    const callSuperman = ():void => {
        return;
    }

    const a = callBatman();

    console.log(a);

})()