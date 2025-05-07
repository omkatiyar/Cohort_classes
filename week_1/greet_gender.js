const prompt = require('prompt-sync')();

const gender_name = [{
    naam: "Om",
    gender: "Male"
},
{
    naam: "Omisha",
    gender: "Female"
}
];

for(let i=0;i<gender_name.length;i++){
    console.log(gender_name[i].naam);
    console.log(gender_name[i].gender);
}