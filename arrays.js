// const mynums=[1,2,3,4,5,6,7,8,9,10]

// // const newnums= mynums.filter( (num) => {
// //     return num > 4})
// // console.log(newnums);

// // const newnums=[]

// // mynums.forEach((num) => {
// //     if(num>4) newnums.push(num);
// // })
// // console.log(newnums);

// //const userbooks=books.filter((bk) => bk.genre==='History')
// // const newnums=mynums.map((num)=> num+10)

// newnums=mynums.map((num) => num*10 ).map((num) => num+1).filter((num) => num>=40)

// console.log(newnums);


const mynums=[1,2,3]

// const total= mynums.reduce(
//     function (acc,currval) {
//         console.log(`acc : ${acc} and currval : ${currval}`);
        
//         return acc+currval
//     },0
// )

const total=mynums.reduce(
    (acc,currval) => acc + currval,0
)

console.log(total);
