var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.jump = function () {
        console.debug("chu");
    };
    return Player;
}());
function main() {
    var jay = new Player();
    jay.jump();
}
