//makes a dom card element for each document in the database

export default function produce (data,container) {
    let child = document.createElement("div");
    child.className = "post";
    let title = document.createElement("h3");
    title.className = "card-t";
    title.innerHTML = data.title;
    let line = document.createElement("hr");
    line.className = "card-line";
    let paragraph = document.createElement("p");           
    paragraph.className = "card-p";
    paragraph.innerHTML = data.content;
    child.appendChild(title);
    child.appendChild(line);
    child.appendChild(paragraph);
    container.appendChild(child);
}