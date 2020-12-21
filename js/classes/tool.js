'use strict';

class Tool {
    name = '';
    type = '';
    classes = '';
    label = '';
    action;

    constructor(name = 'Tool',
        type = 'button',
        classes = 'primary',
        label = 'My Tool',
        action = function (c) { console.log(c); }) {
        this.name = name;
        this.type = type;
        this.classes = classes;
        this.label = label;
        this.action = action;
    }
}