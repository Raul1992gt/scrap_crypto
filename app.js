//Realizamos los imports necesarios
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';


//Creamos función async
async function getIbex35(){    
    const URL = 'https://es.investing.com/indices/spain-35'
try{
    const response = await fetch(URL);
    const body = await response.text();
    const $ = cheerio.load(body);

    const items = [];

    $('.instrument-header_instrument-name__VxZ1O').map((i,ele) => {
        const nombreAccion = $(ele).find('.instrument-header_title__gCaMF').text();

        items.push(nombreAccion);

        
    });

    $('.instrument-price_instrument-price__xfgbB').map((i,ele) => {
        const precioAccion = $(ele).find('span:first').text();
       
        items.push(precioAccion)
    });

    $('.trading-hours_trading-hours__S7rZ5').map((i,ele) => {
        const apertura = $(ele).find('.list_list__item__NpIVc > .trading-hours_value__5_NnB').text();

        items.push(apertura);
    });

    fs.writeFile('ibex35.json', JSON.stringify(items),function(err){
        if(err) return console.log(err);
        console.log('Ibex 35 en JSON');
    });

} catch (error){
    console.log(error);
}
}


//Creamos función async
async function getTesla(){    
    const URL1 = 'https://es.investing.com/equities/tesla-motors'
try{
    const response = await fetch(URL1);
    const body = await response.text();
    const $ = cheerio.load(body);

    const items = [];

    $('.instrument-header_instrument-name__VxZ1O').map((i,ele) => {
        const nombreAccion = $(ele).find('.instrument-header_title__gCaMF').text();

        items.push(nombreAccion);

        
    });

    $('.instrument-price_instrument-price__xfgbB').map((i,ele) => {
        const precioAccion = $(ele).find('span:first').text();
       
        items.push(precioAccion)
    });

    $('.trading-hours_trading-hours__S7rZ5').map((i,ele) => {
        const apertura = $(ele).find('.list_list__item__NpIVc > .trading-hours_value__5_NnB').text();

        items.push(apertura);
    });

    fs.writeFile('tesla.json', JSON.stringify(items),function(err){
        if(err) return console.log(err);
        console.log('Tesla en JSON');
    });

} catch (error){
    console.log(error);
}
}


getIbex35();
getTesla();