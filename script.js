const pelaaja2 = document.querySelector('input[value="2"]');
const pelaaja3 = document.querySelector('input[value="3"]');

const pelaaja1Div = document.querySelector('.pelaaja1');
const pelaaja2Div = document.querySelector('.pelaaja2');
const pelaaja3Div = document.querySelector('.pelaaja3');

pelaaja2.onclick = function() {
    pelaaja1Div.style.display = "block";
    pelaaja2Div.style.display = "block";
    pelaaja3Div.style.display = "none";
};

pelaaja3.onclick = function() {
    pelaaja1Div.style.display = "block";
    pelaaja2Div.style.display = "block";
    pelaaja3Div.style.display = "block";
};

document.querySelector("#pelaaNappi").addEventListener("click", function() {

    let pelaaja1Sisalto = document.querySelector('.pelaaja1 input').value;
    let pelaaja2Sisalto = document.querySelector('.pelaaja2 input').value;

    if (pelaaja1Sisalto != "" && pelaaja2Sisalto != "") {
        window.location.href = "peli.html";
    }

});