(()=> {

    // El signo de interrofación indica que es opcional
    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'no lastname'}`;
    }

    const name = fullName('Tony')

    console.log({name});

})()