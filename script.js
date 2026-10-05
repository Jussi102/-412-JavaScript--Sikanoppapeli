const pelaaja2 = document.querySelector('input[value="2"]');
const pelaaja3 = document.querySelector('input[value="3"]');

const pelaaja1Div = document.querySelector(".pelaaja1");
const pelaaja2Div = document.querySelector(".pelaaja2");
const pelaaja3Div = document.querySelector(".pelaaja3");
const maksimipisteet = document.querySelector(".maksimipisteet");
const noppienMaara = document.querySelector(".noppaForm");
const pelaaNappi = document.querySelector("#pelaaNappi");

let valittuNoppa = 0;

document.querySelector("#noppa1").addEventListener("click", function() {
    valittuNoppa = 1;
});

document.querySelector("#noppa2").addEventListener("click", function() {
    valittuNoppa = 2;
});

pelaaja2.onclick = function() {
    pelaaja1Div.style.display = "block";
    pelaaja2Div.style.display = "block";
    pelaaja3Div.style.display = "none";
    maksimipisteet.style.display = "block";
    noppienMaara.style.display = "block";
};

pelaaja3.onclick = function() {
    pelaaja1Div.style.display = "block";
    pelaaja2Div.style.display = "block";
    pelaaja3Div.style.display = "block";
    maksimipisteet.style.display = "block";
    noppienMaara.style.display = "block";
};

pelaaNappi.onclick = function() {

    const pelaajamaara = document.querySelector('input[name="pelaajamaara"]:checked');

    const pelaaja1Nimi = document.querySelector('input[name="pelaajaNimi1"]').value;
    const pelaaja2Nimi = document.querySelector('input[name="pelaajaNimi2"]').value;
    const pelaaja3Nimi = document.querySelector('input[name="pelaajaNimi3"]').value;
    const maksimipisteetArvo = document.querySelector('input[name="maksimipisteet"]').value;

    if (!pelaajamaara) {
        alert("Valitse pelaajien määrä!");
        return;
    }

    if (pelaaja1Nimi === "" || pelaaja2Nimi === "") {
        alert("Täytä pelaajien nimet!");
        return;
    }

    if (pelaajamaara.value === "3" && pelaaja3Nimi === "") {
        alert("Täytä pelaaja 3:n nimi!");
        return;
    }

    if (valittuNoppa === 0) {
        alert("Valitse noppien määrä!");
        return;
    }

    localStorage.setItem("pelaajienMaara", pelaajamaara.value);
    localStorage.setItem("pelaaja1", pelaaja1Nimi);
    localStorage.setItem("pelaaja2", pelaaja2Nimi);
    localStorage.setItem("pelaaja3", pelaaja3Nimi);
    localStorage.setItem("noppienMaara", valittuNoppa);
    localStorage.setItem("maksimipisteet", maksimipisteetArvo);

    window.location.href = "peli.html";
};