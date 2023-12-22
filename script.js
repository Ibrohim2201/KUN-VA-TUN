let heder = document.querySelector("heder");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
if (btn.innerHTML == "Tun") {
    btn.innerHTML == "Kun";
    document.body.classList.add("tun");
    document.body.classList.toggle("kun");
} else {
    btn.innerHTML = "Tun";
    heder.classList.add("kun");
    heder.classList.toggle("tun");
}
});