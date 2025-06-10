(() => {

    // las enumeraciones ayudan para utilizar un valor semántico fácil de entender
    
    enum AudioLevel {
        min,
        medium,
        max
    }

    enum AudioLevel2 {
        min=1,
        medium, // Sería 2
        max=10
    }


    let currentAudio = AudioLevel.max;
    console.log(currentAudio)
    console.log(AudioLevel)


})()