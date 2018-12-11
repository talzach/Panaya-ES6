


var obj = {
    fooVal: 'this is the value of foo',
    get prop() {
        return this.fooVal;
    },
    set prop(val) {
        this.fooVal = val;
    }
}

let g = obj.prop;