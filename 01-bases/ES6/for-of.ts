(()=> { 

    type Avenger = {
        name:string;
        weapon: string;
    }

    const ironman: Avenger = {
        name:'Ironman',
        weapon:'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name:'Capitán America',
        weapon:'Escudo'
    }

    const thor: Avenger = {
        name:'Thor',
        weapon:'Mjolnir'
    }

    const avengers:Avenger[] = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.weapon)
    }



})()