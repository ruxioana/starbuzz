var RoboDog = /** @class */ (function () {
    function RoboDog(name) {
        this.name = name;
        this.isStarted = true;
    }
    RoboDog.prototype.speak = function () {
        console.log('Woof! Woof!');
    };
    RoboDog.prototype.play = function () {
        console.log('Running to catch a stick.');
    };
    RoboDog.prototype.start = function () {
        console.log('RoboDog started.');
    };
    RoboDog.prototype.stop = function () {
        console.log('RoboDog stopped.');
    };
    return RoboDog;
}());
var rex = new RoboDog('Rex');
rex.speak();
rex.play();
rex.stop();
