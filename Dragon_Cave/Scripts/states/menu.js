var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //constructor
        function Menu() {
            _super.call(this);
        }
        //private method
        //callback function that allows to respond to button click events
        Menu.prototype._buttonClicked = function (event) {
            //get the name of user
            name = document.getElementById("txtName").value;
            if (name == null || name == "") {
                name = "Pin";
            }
            console.log(name);
            changeState(config.PLAY_STATE);
        };
        //public methods
        Menu.prototype.start = function () {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.getResult("dragon"));
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 360;
            this._logo.y = 145;
            this.addChild(this._logo);
            this._nameLabel = new objects.Label("What's your name?", "12px Consolas", "#000000", 250, 220);
            this.addChild(this._nameLabel);
            document.getElementById("txtName").style.display = "inline";
            console.log(name);
            this._introLabel = new objects.Label(" Do you want to play?", "40px Consolas", "#000000", 320, 260);
            this.addChild(this._introLabel);
            //instantiate and add a start button
            this._startButton = new objects.Button("startButton", 300, 340);
            this.addChild(this._startButton);
            this._startButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map