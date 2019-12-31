import fetchcards from './fetchcards.js';
import cardformatter from "./cardformatter.js";
//card fetcher
export default ()=>{
    const cardcontainer = document.getElementById('coursescontent');
    const cardfetcher = fetchcards('/api');
    cardfetcher.then(res=>cardformatter(res,cardcontainer));
}