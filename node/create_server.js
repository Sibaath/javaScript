const http = require('http')

console.log(module)
const server = http.createServer((request,response)=>
{
    if(request.url==='/')
    {
        response.write("Hello sibaath")
        response.end();
   
    }
})

server.listen(3000)