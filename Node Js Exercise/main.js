const student = {
    name: "Marie",
    age: 20,
    courses: []
}
student.age = 21
student.grade = "A"
student.courses.push("Math", "Physics", "Chemistry")
indexOfPhys = student.courses.indexOf("Physics")
slicedArr = student.courses.slice(0,2)
console.log(student)
console.log(indexOfPhys)
console.log(slicedArr)