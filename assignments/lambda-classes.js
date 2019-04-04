// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}



class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }

    listsSubjects() {
        return (this.favSubjects);
    }
}


class ProjectManager extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        return (`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const carol = new Instructor({
    name: 'Carol',
    location: 'SLC',
    age: 55,
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `Sashay. Away.`
});

const guy = new Instructor({
    name: 'Guy',
    location: 'Los Angeles',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Welcome to Flavortown!`
});

const cori = new Student({
    name: 'Cori',
    location: 'Norfolk',
    age: 34,
    gender: 'female',
    previousBackground: 'Bartender',
    className: 'WEB19',
    favSubject: 'CSS'
});

const leo = new Student({
    name: 'Leo',
    location: 'Washington DC',
    age: 26,
    gender: 'male',
    previousBackground: 'Journalist',
    className: 'WEB19',
    favSubject: 'JavaScript'
});

const annalise = new Student({
    name: 'Annalise',
    location: 'Boston',
    age: 30,
    gender: 'female',
    previousBackground: 'Lawyer',
    className: 'WEB19',
    favSubject: 'HTML'
});

const nick = new ProjectManager({
    name: 'Nick',
    location: 'Diamond City',
    age: 100,
    gender: 'synth',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Hell of a game.`,
    gradClassName: 'WEB16',
    favInstructor: 'guy'
})

const cait = new ProjectManager({
    name: 'Cait',
    location: 'Combat Zone',
    age: 35,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Been too long since I picked a fight.`,
    gradClassName: 'WEB15',
    favInstructor: 'fred'
})



