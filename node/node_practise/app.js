// // function say_hello(name)
// // {
// //     console.log(name+"hello")
// // }
// // console.log(window)]
// //  name = "sibaath"
// // console.log(global.name)  // added to global object

// // var logger = require('./logger')
// // logger.log("Sibaath Ahmed")
// // console.log(logger)
// // // let n = "sibaath"
// // // console.log(n);
// // // console.log(module)

// const func = require('./logger')
// func("sibaath Ahmed S")
// console.log(func)

//Path

// const path = require('path');

// var pathobj =  path.parse(__filename);

// console.log(pathobj)

//os

// const os = require("os")
// console.log(`The total memory is ${os.totalmem()} and the free memory is ${os.freemem()}`)


//files
// const fs = require('fs')
// const files = fs.readdirSync("./")
// console.log(files)
// fs.readdir("./",function(err,files)
// {
//     if(err)
//     console.log(`Error ${err}`);
//     else
//     console.log(`Files ${files}`);
// })

//Event

// const Event = require('events')
// const event = new Event();

// //event.on('message logged',function(args)
// event.on('message logged',(args)=>
// {
//     console.log("Listener called",args)
// })

// event.emit("message logged",{id : 1 , url : 'http://'})

//Class and Event listeners 

// const Event = require('events')
// const Logger = require('./logger')

// const logger = new Logger();

// logger.on('message_connect',(args)=>
// {
//     console.log('The message received',args)
// })

// logger.log("message_connect")


