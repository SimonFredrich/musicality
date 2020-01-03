export default function trucate(str){
    if(str.length>140){
        let newstr = [];
        for(let i = 0; i<140; i++){
            newstr.push(str[i]);
        }
        newstr = newstr.join('');
        return newstr.concat("...");
    }   
    return str;
}