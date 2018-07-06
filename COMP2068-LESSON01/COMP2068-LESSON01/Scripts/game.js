var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.jump = function () {
        console.debug("you jumped!");
    };
    return Player;
}());
function main() {
    var jay = new Player();
    jay.jump();
}
//# sourceMappingURL=game.js.map