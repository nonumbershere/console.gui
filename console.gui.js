console.gui = {
    box: function box(width, height, text) {
        var j = width + 1;
        var h = [];
        var floor;

        for (var v = 0; v < j; h.push(type), v++) {
            floor = h.toString().replaceAll(',', '');
        }
        var space1 = []
        var n = j;
        var space = '';
        for (var c = 0; c < v - 1; space1.push(' '), c++) {
            space = space1.toString().replaceAll(',', '');
        }
        var l = height + 1;
        var m = [];
        var wall;
        for (var i = 0; i < l; m.push(type + space + ' ' + type), i++) {
            wall = m.toString().replaceAll(',', '\n');
        }
        var output = " " + floor + "\n" + wall + "\n" + ' ' + floor;
        return output;
    },
    printBox: function printBox(width, height, text) {
        var j = width + 1;
        var h = [];
        var floor;

        for (var v = 0; v < j; h.push(text), v++) {
            floor = h.toString().replaceAll(',', '');
        }
        var space1 = [];
        var n = j;
        var space = '';
        for (var c = 0; c < v - 1; space1.push(' '), c++) {
            space = space1.toString().replaceAll(',', '');
        }
        var l = height + 1;
        var m = [];
        var wall;
        for (var i = 0; i < l; m.push(text + space + ' ' + text), i++) {
            wall = m.toString().replaceAll(',', '\n');
        }
        var output = " " + floor + "\n" + wall + "\n" + ' ' + floor;
        console.log(output);
    },
    fillBox: function fillBox(width, height, type, fill) {
        var j = width + 1;
        var h = [];
        var floor;

        for (var v = 0; v < j; h.push(type), v++) {
            floor = h.toString().replaceAll(',', '');
        }
        var space1 = []
        var n = j;
        var space = '';
        for (var c = 0; c < v - 1; space1.push(fill), c++) {
            space = space1.toString().replaceAll(',', '')
        }
        var l = height + 1;
        var m = [];
        var wall;
        for (var i = 0; i < l; m.push(type + space + fill + type), i++) {
            wall = m.toString().replaceAll(',', '\n');
        }
        var output = " " + floor + "\n" + wall + "\n" + ' ' + floor
        console.log(output)
    },
    backFillBox: function fillBox(width, height, type, fill) {
        var j = width + 1;
        var h = [];
        var floor;

        for (var v = 0; v < j; h.push(type), v++) {
            floor = h.toString().replaceAll(',', '');
        }
        var space1 = [];
        var n = j;
        var space = '';
        for (var c = 0; c < v - 1; space1.push(fill), c++) {
            space = space1.toString().replaceAll(',', '')
        }
        var l = height + 1;
        var m = [];
        var wall;
        for (var i = 0; i < l; m.push(type + space + fill + type), i++) {
            wall = m.toString().replaceAll(',', '\n');
        }
        var output = " " + floor + "\n" + wall + "\n" + ' ' + floor
        return output;
    },
    color: function (text, color) {
        console.log('%c' + text, 'color:' + color)
    },

}
