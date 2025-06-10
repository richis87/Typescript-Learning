(()=>{

    const fullName = (firstName:string,...restAtgs:string[] )=> {
        return `${ firstName } ${ restAtgs.join(' ') }`;
    };

    const superman = fullName('Clark','Joseph','Kent');

    console.log(superman);

})()