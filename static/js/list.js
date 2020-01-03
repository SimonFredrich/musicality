import fetchcards from './fetchcards.js';
import listformatter from "./listformatter.js";
//card fetcher
export default ()=>{
    const listcontainers = document.getElementsByClassName('listcontainer');
    const cardfetcher = fetchcards('/api');
    cardfetcher.then(res=>Array.from(listcontainers).forEach((list)=>listformatter(res,list)));
}