import fetchcards from './fetchcards.js';
import postformatter from "./postformatter.js";
//card fetcher
export default ()=>{
    const postcontainer = document.getElementById('courses');
    const cardfetcher = fetchcards('/api/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1) ); //gets post content from current url
    cardfetcher.then(res => postformatter(res,postcontainer));
}