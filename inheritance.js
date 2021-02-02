class Parent {
    constructor() {
        this.fatherName = "Schwarznegger";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFulName() {
        return this.name + " " + this.fatherName;
    }
}
const Child1 = new Child("Arnold");
const Child2 = new Child("Tom");
console.log(Child1.getFulName(), Child2.getFulName());