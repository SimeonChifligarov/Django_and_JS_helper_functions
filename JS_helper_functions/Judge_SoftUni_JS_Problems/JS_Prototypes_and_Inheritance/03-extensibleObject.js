function extensibleObject() {
    let myProto = {};
    let extensibleObj = Object.create(myProto);

    extensibleObj.extend = function (template) {
        for (const key in template) {
            if (typeof template[key] === 'function') {
                let myProto = Object.getPrototypeOf(this);
                myProto[key] = template[key];
            } else {
                this[key] = template[key];
            }
        }
    }

    return extensibleObj;
}


// const myObj = extensibleObject();
// myObj: {
//     __proto__: { }
//     extend: function () {… }
// }
// 