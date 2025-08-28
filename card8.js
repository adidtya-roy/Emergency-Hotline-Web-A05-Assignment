// Card 8 Feature
// love Click Featur 
document.getElementById("love-btn8").addEventListener("click" , function(e){
    e.preventDefault;

    const hard8 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN8 = hard8 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN8;


})

// Call Click and cart coin and History feature
const history8 = document.getElementById("historyCard");
const coin8 = document.getElementById("coin");
document.getElementById("CallBtn8").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call8 = parseInt(coin8.innerText);

    if (call8 >= 20) {
        call8 -= 20; 
        coin8.innerText = call8;
        alert("📞Brac Helpline 16445..");
    } else if (call8 > 0 && call8 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call8 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call8 < 0) {
        call8 = 0;
        coin8.innerText = call8;
    }

    // history feature
        // history Create
        const entryDiv8 = document.createElement("div");
        entryDiv8.classList.add("history-entry");


        const now8 = new Date();
        const dateTime8 = now8.toLocaleTimeString();

        entryDiv8.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Brac Helpline </br> 16445 </div> 
                <div class="time"> ${dateTime8}</div>
            </div>`;

        history.appendChild(entryDiv8);

});


// Coppy feature
document.getElementById("coppy-Btn8").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy8 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn8 = Coppy8 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn8 ;



// number coppy Feature
    const text = document.getElementById("Number8").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})