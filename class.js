class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Bangladesh Film Industries";
    }
}
const student1 = new Student(25, "Shuvo");
const student2 = new Student(21, "Mahiya");
const student3 = new Student(25, "Ananta");
console.log(student1, student2, student3);
//console.log(student1.name, student2.name, student3.name);