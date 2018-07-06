class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    jump() {
        console.debug("you jumped!");
    }


}
function main() {
    var jay = new Player();
    jay.jump();
}