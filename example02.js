//null and undefined
const a = [1, 2, 5, 7];
console.log(a[5]); //6th elem does not exist

const student = {
  name: "john",
  gender: "Male",
};

console.log(student.age);

function square1(x) {
  const result = x * x;
}

console.log(square1(2));

function square2(x) {
  console.log(x); //x is undefined
  return x * x;
}

square2();
