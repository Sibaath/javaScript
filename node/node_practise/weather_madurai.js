const fetch = require('node-fetch');
const weather_api = async ()=>
{
    try{
        var result = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Madurai?unitGroup=us&key=ZZC976D2Y9TQWSXB363S5NHLY&contentType=json")
        var response = await result.json();
        console.log(await print_weather(response.description))
    }
    catch(err)
    {
        console.log(err)
    }
}

function print_weather(data)
{
    return new Promise((res,rej)=>
    {
        res(`The current weather in madurai is : ${data}`)
    })
}
weather_api()

// const fetch = require('node-fetch')
// async function weather_api()
// {
//     try{
//         var result = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Madurai?unitGroup=us&key=ZZC976D2Y9TQWSXB363S5NHLY&contentType=json")
//         var response  = await result.json();
//         console.log(response.description)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// weather_api()


// const fetch = require('node-fetch')
// function weather_api()
// {
//         var result = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Madurai?unitGroup=us&key=ZZC976D2Y9TQWSXB363S5NHLY&contentType=json")
//         result.then((response)=>response.json()).then((data)=>console.log(data.description))
// }

// weather_api()

