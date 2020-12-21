'use strict';

class EtchASketch {

    ui;

    selectRainbowBrushMode(e, self) {
        self.ui.brush.mode = 'rainbow';
    }

    selectCustomBrushMode(e, self) {
        self.ui.brush.mode = 'fixed';
        self.ui.brush.color = prompt("What color do you want to use?\nYou can use name, rgb or hex code.");
    }

    changeTileSize(e, self) {
        self.ui.brush.size = prompt("What size in pixels you want to apply?");

        self.ui.board.element.style.width = `${self.ui.board.size.width * self.ui.brush.size}px`;
        self.ui.board.element.style.gridTemplateColumns = `repeat(${self.ui.board.size.width}, ${self.ui.brush.size}px)`;
        self.ui.board.element.style.gridTemplateRows = `repeat(${self.ui.board.size.width}, ${self.ui.brush.size}px)`;
    }

    newProject(e, self) {
        self.ui.brush.color = "#000";
        self.ui.brush.mode = "normal";
        self.loadUI();
        self.createBoard();
    }

    loadUI() {
        var self = this;
        self.ui.toolBar.element.innerHTML = '';
        for (let tool of self.ui.toolBar.tools) {
            let element = document.createElement(tool.type);
            element.className = tool.classes;
            element.textContent = tool.label;
            element.title = tool.name;
            element.addEventListener('click', function(e){
                tool.action(e, self);
            });

            let cont = document.createElement('div');
            cont.className = 'col';
            cont.appendChild(element);

            self.ui.toolBar.element.appendChild(cont);
        }
    }

    createBoard() {
        var self = this;
        self.ui.board.element.innerHTML = '';
        for (let x = 0; x < self.ui.board.size.height; x++) {
            for (let y = 0; y < self.ui.board.size.width; y++) {
                let tile = document.createElement('div');
                tile.style.backgroundColor = "#fff";
                tile.addEventListener('mouseover', function(e){
                    self.changeColor(e, self);
                });
                self.ui.board.element.appendChild(tile);
            }
        }

        self.ui.board.element.style.width = `${self.ui.board.size.width * self.ui.brush.size}px`;
        self.ui.board.element.style.gridTemplateColumns = `repeat(${self.ui.board.size.width}, ${self.ui.brush.size}px)`;
        self.ui.board.element.style.gridTemplateRows = `repeat(${self.ui.board.size.width}, ${self.ui.brush.size}px)`;
    }

    randomColor() {
        let r, g, b, color;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        color = `rgb(${r},${g},${b})`;
        return color;
    }

    changeColor(e, self){
        e.target.style.backgroundColor = self.ui.brush.color;
        if (self.ui.brush.mode == 'rainbow') {
            self.ui.brush.color = self.randomColor();
        }
    }

    constructor(holder = document.querySelector('#app'), size = { width: 20, height: 20 }) {
        var self = this;

        self.ui = new UI(new Tool('Clear Board', 'button', 's red', 'Clear', this.newProject),
        new Tool('Rainbow Mode', 'button', 's', 'Rainbow Mode', this.selectRainbowBrushMode),
        new Tool('Custom Color Mode', 'button', 's', 'Custom Color', this.selectCustomBrushMode),
        new Tool('Change Tile Size', 'button', 's', 'Change Size', this.changeTileSize));

        self.ui.board.size = {
            width: size.width,
            height: size.height
        };

        self.ui.brush.color = '#000000';

        self.createBoard();

        self.loadUI();
    }
}