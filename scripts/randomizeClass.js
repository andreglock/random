const ourClass = [
    'Abdul', 'Alexandru', 'André', 'Carsten', 'Mawi', 'Ferdinand', 'Joseph', 'Kai', 'Kalaya', 
    'Karin', 'Khushal', 'Lars', 'Lea', 'Maria', 'Mario', 'Maxie', 'Ronnie', 'Rudesh',
];

function randomizeClass(array) {
    const randomizedClass = [];
    const originalLength = array.length;
    for (let i = 0; i < originalLength; i++) {
        const number = Math.floor(Math.random() * array.length);
        randomizedClass.push(array.splice(number, 1)[0]);
    }
    return randomizedClass;
}

function makeTeams (array, number) {
    const randomClass = randomizeClass(array);
    const classTeams = [];
    const teams = randomClass.length / number;
    for(let i = 0; i < teams; i++) {
        classTeams.push([]);
    }
    for (let i = 0; i < randomClass.length; i) {
        for(let j = 0; j < teams; j++) {
            console.log(randomClass[i]);
            classTeams[j].push(randomClass[i]);
            i++;
        }
    }
    return classTeams;
}

//console.log(randomizeClass(ourClass));
console.log(makeTeams(ourClass, 3));