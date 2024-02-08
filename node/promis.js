// // function f1()
// // {
// //     return new Promise((resolve,reject)=>
// //     {
// //         resolve("Hi the promise if fullfilled")
// //     })
// // }

// // f1().then(data=>
// //     {
// //         console.log(data)
// //     })

// function f1()
// {
//     return new Promise((res,rej)=>
//     {
//         res("ranily")
//     })
// }

// function f2(data)
// {
//     return new Promise((req,res)=>
//     {
//         switch(data)
//         {
//             case 'cloudy' : req('The weather today is cloudy');
//             break;
//             default:res("The wether is not found")
//         }
//     })
// }


// f1().then(f2).then(data=>console.log(data)).catch(err=>console.log(err))


function f1()
{
    return new Promise((res,rej)=>
    {
        rej("bad")
    })
}

// f1().then(data=>console.log(data)).catch(err=>console.log(err))

async function f2()
{
    try{
        let result = await f1();
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

f2()