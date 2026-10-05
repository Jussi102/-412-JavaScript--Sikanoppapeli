const heitaNappi = document.querySelector("#heitaNappi");
const sailytysNappi = document.querySelector("#sailytysNappi");

const noppa1 = document.querySelector("#noppa1");
const noppa2 = document.querySelector("#noppa2");

const pisteet1 = document.querySelector("#pisteet1");
const pisteet2 = document.querySelector("#pisteet2");
const pisteet3 = document.querySelector("#pisteet3");

const vuoro = document.querySelector("#vuoro");

const pelaaja1Nimi = localStorage.getItem("pelaaja1");
const pelaaja2Nimi = localStorage.getItem("pelaaja2");
const pelaaja3Nimi = localStorage.getItem("pelaaja3");

const pelaajienMaara = Number(localStorage.getItem("pelaajienMaara"));
const noppienMaara = Number(localStorage.getItem("noppienMaara"));
const maksimipisteet = Number(localStorage.getItem("maksimipisteet"));

let nykyinenPelaaja = 1;
let vuoronPisteet = 0;

let pelaaja1Pisteet = 0;
let pelaaja2Pisteet = 0;
let pelaaja3Pisteet = 0;

document.querySelector("#nimi1").textContent = pelaaja1Nimi;
document.querySelector("#nimi2").textContent = pelaaja2Nimi;
document.querySelector("#nimi3").textContent = pelaaja3Nimi;

if (pelaajienMaara === 2) {
    document.querySelector("#pelaaja3Rivi").style.display = "none";
}

if (noppienMaara === 1) {
    noppa2.style.display = "none";
}

vuoro.textContent = pelaaja1Nimi + " vuoro";

heitaNappi.addEventListener("click", function() {

    const tulos1 = Math.floor(Math.random() * 6) + 1;
    let tulos2 = 0;

    noppa1.src = "nopat/noppa" + tulos1 + ".png";

    if (noppienMaara === 2) {
        tulos2 = Math.floor(Math.random() * 6) + 1;
        noppa2.src = "nopat/noppa" + tulos2 + ".png";
    }

    if (tulos1 === 1 || tulos2 === 1) {
        vuoronPisteet = 0;
        vaihdaVuoro();
    } else {
        vuoronPisteet += tulos1 + tulos2;
    }
});

sailytysNappi.addEventListener("click", function() {

    if (nykyinenPelaaja === 1) {
        pelaaja1Pisteet += vuoronPisteet;
        pisteet1.textContent = pelaaja1Pisteet;
    }

    if (nykyinenPelaaja === 2) {
        pelaaja2Pisteet += vuoronPisteet;
        pisteet2.textContent = pelaaja2Pisteet;
    }

    if (nykyinenPelaaja === 3) {
        pelaaja3Pisteet += vuoronPisteet;
        pisteet3.textContent = pelaaja3Pisteet;
    }

    if (tarkistaVoittaja()) {
        return;
    }

    vuoronPisteet = 0;
    vaihdaVuoro();
});

function vaihdaVuoro() {

    nykyinenPelaaja++;

    if (nykyinenPelaaja > pelaajienMaara) {
        nykyinenPelaaja = 1;
    }

    if (nykyinenPelaaja === 1) {
        vuoro.textContent = pelaaja1Nimi + " vuoro";
    }

    if (nykyinenPelaaja === 2) {
        vuoro.textContent = pelaaja2Nimi + " vuoro";
    }

    if (nykyinenPelaaja === 3) {
        vuoro.textContent = pelaaja3Nimi + " vuoro";
    }
}

function tarkistaVoittaja() {

    if (pelaaja1Pisteet >= maksimipisteet) {
        localStorage.setItem("voittaja", pelaaja1Nimi);
        window.location.href = "voittaja.html";
        return true;
    }

    if (pelaaja2Pisteet >= maksimipisteet) {
        localStorage.setItem("voittaja", pelaaja2Nimi);
        window.location.href = "voittaja.html";
        return true;
    }

    if (pelaajienMaara === 3 && pelaaja3Pisteet >= maksimipisteet) {
        localStorage.setItem("voittaja", pelaaja3Nimi);
        window.location.href = "voittaja.html";
        return true;
    }

    return false;
}