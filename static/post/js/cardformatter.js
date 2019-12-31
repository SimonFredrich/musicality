//makes a dom card element for each document in the database

export default function produce (data,container) {
    data.forEach((card,index)=>{
        let child = document.createElement("div");
        child.className = "card";
        let cardcontent = document.createElement("div");
        cardcontent.className = "card-content";
        let cardContentImg = document.createElement("div");
        cardContentImg.className = "card-content-img";
        let img = document.createElement("img");
        img.src = "img/chordtypes.JPG";
        img.alt = "cart-content-img";
        cardContentImg.appendChild(img);
        let title = document.createElement("h3");
        title.className = "card-t";
        title.innerHTML = card.title;
        let line = document.createElement("hr");
        line.className = "card-line";
        let paragraph = document.createElement("p");           
        paragraph.className = "card-p";
        paragraph.innerHTML = card.content;
        cardcontent.appendChild(cardContentImg);
        cardcontent.appendChild(title);
        cardcontent.appendChild(line);
        cardcontent.appendChild(paragraph);
        child.appendChild(cardcontent);
        child.addEventListener("click",()=>window.location.href = 'post/'.concat(card._id));
        container.appendChild(child);
    })
}