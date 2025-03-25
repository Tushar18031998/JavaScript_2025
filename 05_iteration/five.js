const coding = ["js", "ruby", "java", "python", "swift"];

//ist way

// coding.forEach(function (item) {
//   console.log(item);
// });

//2nd way

// coding.forEach((item)=> {
//       console.log(item);
//     });

//3rd way

// function printme(item){
//     console.log(item);

// }
// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// });


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        
        languageName:"c plus plus",
        languageFileName:"cpp"
    },
    {
        
        languageName:"swift by apple",
        languageFileName:"swift"
    },
]



myCoding.forEach((item) => {
    console.log(item.languageName);
});

