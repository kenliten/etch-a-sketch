class UI {
    toolBar = {
        element: document.querySelector('#tool-bar'),
        tools: [
        ]
    };
    board;
    brush;

    constructor(...tools) {
        for (let tool of tools) {
            this.toolBar.tools.push(tool);
        }

        this.board = {
            element: document.querySelector('#board'),
            tiles: [],
            size: {}
        }

        this.brush = {
            mode: 'normal', // normal | fixed | rainbow
            color: '',
            size: 42,
            width: 1
        }
    }
}