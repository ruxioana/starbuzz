interface Animal {
    name: string;
    speak(): void;
}

interface Pet {
    play(): void;
}

interface Robot {
    start(): void;
    stop(): void;
}

class RoboDog implements Animal, Pet, Robot { /* trebuie sa defineasca interfetele neimplementate */
    name: string;
    isStarted: boolean;
    constructor(name: string) {
        this.name = name;
        this.isStarted = true;
    }
    speak(): void {
        console.log('Woof! Woof!');
    }
    play(): void {
        console.log('Running to catch a stick.');
    }
    start(): void {
        console.log('RoboDog started.');
    }
    stop(): void {
        console.log('RoboDog stopped.');
    } 

}

let rex = new RoboDog('Rex');
rex.speak();
rex.play();
rex.stop();