//makes a dom list

export default function produce (data,container) {
    data.forEach((note,index)=>{
        let child = document.createElement("li");
        let lia = document.createElement("a");
        lia.innerHTML = note.title;
        child.appendChild(lia);
        child.addEventListener("click",()=>window.location.href = '/post/'.concat(note._id));
        container.appendChild(child);
    })
}