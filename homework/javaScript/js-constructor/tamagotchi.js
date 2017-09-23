
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

    start(){
        var self = this;
        this.hungerTimer = setInterval( () => {
            self.cry();
        }, 6000);

        this.yawnTimer = setInterval(() => {
            self.yawn();
        }, 10000);

        this.sickTimer = setInterval(() => {
            self.puke();
        }, 20000);
    }

    stop() {
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    }
}

//create new Tamagotchis
const tammy = new Tamagotchi("Tammy", "skittle");
const tommy = new Tamagotchi("Tommy", "owl");
const dopey = new Tamagotchi("Dopey", "lizard");

//test out your Tamagotchies below via console.logs
//tamaTwo.cry();
//tamaOne.cry();
//tamaThree.yawn();
//tamaOne.puke();
tammy.start();


module.exports = {
    Tamagotchi,
    tammy,
    tommy,
    dopey
};