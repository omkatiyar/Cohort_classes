let obj = {
    name: "Om katiyar",
    city: "Kanpur",
    details: {
        age: 26,
        dob: "05-02-1999",
        occupation: "SDE"
    }
};
// console.table(..) prints obj in tabular format
console.table(obj);
console.table(console);

console.time("label, ex: for loop")
for(let i=0;i<10;i++)
    console.log(i);
console.timeEnd("label, ex: for loop");