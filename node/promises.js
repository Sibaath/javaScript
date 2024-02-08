// function task1()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve("task 1 completed")
//         })
//     })
// }

// function task2()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve("task 2 completed")
//         })
//     })
// }

// function task3()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve("task 3 completed")
//         })
//     })
// }

// task1().then((value)=>{
//     console.log(value) 
//     return task2()
// }).then((value)=>{
//     console.log(value)
//     return task3;
// }).then((value)=>
// {
//     console.log(value)
//     console.log("All works completed")
// }).catch(()=>{
//     console.error(error)
// })