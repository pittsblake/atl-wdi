console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        this.name = name;
        this.creatureType = creatureType;
    }

    cry(){
        this.foodInTummy -- ;
        console.log(`${this.name} has ${this.foodInTummy} in its tummy`);
        console.log('WAHH!!!');
    }
}

//create new Tamagotchis
const tamaOne = new Tamagotchi("Tammy, skittle");
const tamaTwo = new Tamagotchi("Tommy, owl");
const tamaThree = new Tamagotchi("Dopey, lizard");

tamaOne.cry();
tamaTwo.cry();
//test out your Tamagotchies below via console.logs
