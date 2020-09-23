class players {
    constructor({force, life}, name) {
        this.force = force;
        this.life = life;
        this.name = name;
        this.shot = 0;
    }

    get for() {
        return this.force;
    }

    get hp() {
        return this.life;
    }

    get s() {
        return this.shot;
    }

    get n() {
        return this.name;
    }

    set hp(newLifePoint) {
        this.life = newLifePoint;
    }

    set s(newShot) {
        this.shot = newShot
    }

    hit() {
        this.calculShot();
        this.life -= this.shot
    }

    calculShot(atkForce) {
        console.log(atkForce)
        let usefullMethod = new usefull;
        this.shot = usefullMethod.getRandomIntInclusive((atkForce / .5), (atkForce * .5))
    }

}

class dragon extends players{
    constructor({force, life}, name) {
        super({force, life}, name)
    }   
}

class knight extends players {
    constructor({force, life}, name) {
        super({force, life}, name)
    }
}

class game {

    constructor() {
        this.gameState = "progress";
    }

    run() {
        let init = new initGame;
        init = init.init();
        let {dragonStats, knightStats} =  { ...init};
        let dragonPlayer = new dragon(dragonStats, "boby")
        let knightPlayer = new knight(knightStats, "bobySlayer")
        console.log(`Match Started : ${knightPlayer.n}(knight) -${knightPlayer.hp} HP- VS -${dragonPlayer.hp} HP- ${dragonPlayer.n}(dragon) !`)
        console.log("Lets Fight!")
        this.gameLoop(dragonPlayer, knightPlayer);
    }

    gameLoop(dragon, knight){
        if(dragon.hp <= 0 ||knight.hp <= 0){
            dragon.hp <= 0 ? console.log("knight win !") : console.log("dragon win !");
            return;
        }
        dragon.hit(knight.force)
        knight.hit(dragon.force)
        console.log(`Knight deal ${knight.shot} dmg to Dragon, Dragon life remaining ${dragon.hp <= 0 ? "0" : dragon.hp}`)
        console.log(`Dragon deal ${dragon.shot} dmg to Knight, Knight life remaining ${knight.hp <= 0 ? "0" : knight.hp}`)
        dragon.s = 0;
        knight.s = 0;
        this.gameLoop(dragon, knight)
    }
}

class initGame {
    init() {
        let dragonStats = this.createStats(300, 5);
        let knightStats = this.createStats(200, 10);
        return {dragonStats, knightStats};
    }

    createStats(baseHp, baseForce) {
        let usefullMethod = new usefull;
        let life = baseHp + usefullMethod.getRandomIntInclusive(1, 100);
        let force = baseForce + usefullMethod.getRandomIntInclusive(1, 10);
        return {force : force, life : life}
    }
}

class usefull {
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    } 
}

const startGame = new game;
startGame.run();