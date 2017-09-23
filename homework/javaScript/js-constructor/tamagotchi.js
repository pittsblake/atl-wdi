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

    puke(){
        this.foodInTummy -- ;
        console.log(`${this.name}, the ${this.creatureType}, just puked and now only has ${this.foodInTummy} in its tummy. WAHHH!`);
    }

    yawn(){
        this.restedness -- ;
        console.log(`${this.name} has a current restedness of ${this.restedness}`)
    }
}

//create new Tamagotchis
const tamaOne = new Tamagotchi("Tammy", "skittle");
const tamaTwo = new Tamagotchi("Tommy", "owl");
const tamaThree = new Tamagotchi("Dopey", "lizard");

tamaOne.cry();
tamaTwo.cry();
tamaThree.yawn();
tamaOne.puke();
//test out your Tamagotchies below via console.logs
