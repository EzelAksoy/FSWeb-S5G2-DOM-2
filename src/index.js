import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//document.querySelector("h1").addEventListener("click", function (e) {
// alert("Bana tıkladın!");
//});

// Kodlar buraya gelecek!

let linkler = document.querySelectorAll(".nav a");
let adresler = [
  "https://www.etstur.com/",
  "https://www.google.com.tr/?hl=tr",
  "https://eksisozluk.com/",
  "https://www.enka.com/tr/",
];
linkler.forEach((item, i) => {
  item.addEventListener("mouseover", (olay) => {
    olay.target.style.backgroundColor = "#6DE4B1";
    olay.target.style.fontSize = "2rem";
    olay.target.style.padding = "10px";
    olay.target.style.borderRadius = "5px";
    olay.target.href = adresler[i];
  });
  item.addEventListener("mouseleave", (olay) => {
    olay.target.style.backgroundColor = "white";
    olay.target.style.fontSize = "1.6rem";
    olay.target.style.padding = "0";
  });
});
let sayfaSonu = document.querySelector(".footer p");
sayfaSonu.addEventListener("wheel", () => {
  sayfaSonu.textContent = "Tebrikler Sayfa Sonu";
});
sayfaSonu.addEventListener("dblclick", () => {
  if (sayfaSonu.textContent === "Tebrikler Sayfa Sonu") {
    sayfaSonu.textContent = "Copyright Eğlence Otobüsü 2022";
  }
});
let sayac = 0;
let imageYazı = document.querySelector(".intro img");
imageYazı.addEventListener("dblclick", (e) => {
  if (sayac < 1) {
    let Yazı = document.createElement("div");
    Yazı.style.fontWeight = "bold";
    Yazı.style.fontStyle = "italic";
    Yazı.textContent = "TEBRİKLER";
    Yazı.style.textAlign = "center";
    document.querySelector(".intro").prepend(Yazı);
    sayac = sayac + 1;
  }
});
let sayar = 0;
const resim =
  "https://www.hareketligifler.net/data/media/425/otobus-hareketli-resim-0024.gif";
let Animasyon = document.querySelector(".nav-container h1");
Animasyon.addEventListener("dblclick", (e) => {
  if (sayar < 1) {
    e.target.textContent = "";
    let image = document.createElement("img");
    image.setAttribute("src", resim);
    e.target.prepend(image);
    sayar = sayar + 1;
  }
});
