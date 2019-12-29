export default function produce (data,container) {
    data.forEach(card=>{
        let child = document.createElement("div");
        child.className = "card";
        let cardcontent = document.createElement("div");
        cardcontent.className = "card-content";
        let title = document.createElement("h3");
        title.className = "card-t";
        title.innerHTML = card.title;
        let line = document.createElement("hr");
        line.className = "card-line";
        let paragraph = document.createElement("p");           
        paragraph.className = "card-p";
        paragraph.innerHTML = card.content;
        cardcontent.appendChild(title);
        cardcontent.appendChild(line);
        cardcontent.appendChild(paragraph);
        child.appendChild(cardcontent);
        container.appendChild(child);
    })
}