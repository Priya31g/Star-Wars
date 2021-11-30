function redirect() {
    window.location.href = "Index.html"

}

function appendMovie() {
    let t = localStorage.getItem(("detail"));
    t = JSON.parse(t)
        //  console.log(t)
    let div1 = document.getElementById("personal_info");
    let p1 = document.createElement("p");
    p1.innerText = "Birth Year :   " + t.birth_year;
    let p2 = document.createElement("p");
    p2.innerText = "Gendre :   " + t.gender;
    let p3 = document.createElement("p");
    p3.innerText = "Heigth :   " + t.height;
    div1.append(p1, p2, p3)
    let div2 = document.getElementById("anatomy");
    let a1 = document.createElement("p");
    a1.innerText = "Eye color :   " + t.eye_color;
    let a2 = document.createElement("p");
    a2.innerText = "Mass :   " + t.mass;
    let a3 = document.createElement("p");
    a3.innerText = "Hair color :   " + t.hair_color;
    div2.append(a1, a2, a3)
    document.getElementById("n").innerText = t.name;
}
appendMovie()
