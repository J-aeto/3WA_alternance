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

    hit(atkShot) {
        this.life -= atkShot
    }

    calculShot() {
        let usefullMethod = new usefull;
        this.shot =  usefullMethod.getRandomIntInclusive((this.force / .5), (this.force * .5))
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
        this.gameLogs = [];
        this.turn = 1;
        this.initiative = 0;
    }

    run(dragonName, knightName) {
        let init = new initGame;
        init = init.init();
        let {dragonStats, knightStats} =  { ...init};
        let dragonPlayer = new dragon(dragonStats, dragonName)
        let knightPlayer = new knight(knightStats, knightName)
        this.gameLogs.push(`Match Started : ${knightPlayer.n}(knight) -${knightPlayer.hp} HP- VS -${dragonPlayer.hp} HP- ${dragonPlayer.n}(dragon) !`)
        this.gameLogs.push("Lets Fight!")
        this.gameLoop(dragonPlayer, knightPlayer);
    }

    gameLoop(dragon, knight){
        if(dragon.hp <= 0 || knight.hp <= 0){
            dragon.hp <= 0 ? this.gameLogs.push(`*********** ${knight.n} the Knight win ! ***********`) : this.gameLogs.push(`*********** ${dragon.n} the Dragon win ! ***********`);
            this.turn = 1;
            console.log(this.gameLogs)
            return;
        }
        const usefullMethod = new usefull;
        this.initiative = usefullMethod.getRandomIntInclusive(0, 1);

        this.gameLogs.push(`*********** TURN N° ${this.turn} ***********`)
        if (this.initiative == 0) {
            this.gameStatement(dragon, knight);
            this.gameLoop(dragon, knight);
        } else {
            this.gameStatement(knight, dragon);
            this.gameLoop(dragon, knight);
        }
    }

    gameStatement(playerAtk, playerDef) {
        playerAtk.calculShot()
        playerDef.hit(playerAtk.s)
        this.gameLogs.push(`${playerAtk.n} have initiative and deal ${playerAtk.s} dmg to ${playerDef.n}, ${playerDef.n} life remaining ${playerDef.hp <= 0 ? "0" : playerDef.hp}`)
        playerAtk.s = 0;
        playerDef.s = 0;
        this.turn++;     
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
startGame.run("Boby the dragon", "BobySlayer");