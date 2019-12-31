import fetchcards from './fetchcards.js';
import postformatter from "./cardformatter.js";
//card fetcher
export default ()=>{
    cardfetcher.then(res=>cardformatter(res,cardcontainer));
    const postcontainer = document.getElementById('courses');
    const cardfetcher = fetchcards('/api' + window.location.href.substring(this.href.lastIndexOf('/') + 1));
    cardfetcher.then(res => postformatter(res,postcontainer));
}