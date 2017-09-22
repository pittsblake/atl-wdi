console.log('tamagotchi file is loaded');

//your class declaration here
class tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry(){
        this.foodInTummy -- ;
        console.log(foodInTummy);
        console.log('WAHH!!!');
    }
}

//create new Tamagotchis

//test out your Tamagotchies below via console.logs
