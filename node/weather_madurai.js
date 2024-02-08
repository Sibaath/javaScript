const fetch = require('node-fetch');
const weather_api = async ()=>
{
    try{
        var result = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Madurai?unitGroup=us&key=ZZC976D2Y9TQWSXB363S5NHLY&contentType=json")
        var response = await result.json();
        await print_weather(response.description)
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
        console.log(`The current weather in madurai is : ${data}`)
    })
}
weather_api()