// Card 7 Feature
// love Click Featur 
document.getElementById("love-btn7").addEventListener("click" , function(e){
    e.preventDefault;

    const hard7 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN7 = hard7 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN7;


})

// Call Click and cart coin and History feature
const history7 = document.getElementById("historyCard");
const coin7 = document.getElementById("coin");
document.getElementById("CallBtn7").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call7 = parseInt(coin7.innerText);

    if (call7 >= 20) {
        call7 -= 20; 
        coin7.innerText = call7;
        alert("📞Electricity Helpline 16216..");
    } else if (call7 > 0 && call6 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call7 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call7 < 0) {
        call7 = 0;
        coin7.innerText = call7;
    }

    // history feature
        // history Create
        const entryDiv7 = document.createElement("div");
        entryDiv7.classList.add("history-entry");


        const now7 = new Date();
        const dateTime7 = now7.toLocaleTimeString();

        entryDiv7.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Electricity Helpline </br> 16216 </div> 
                <div class="time"> ${dateTime7}</div>
            </div>`;

        history.appendChild(entryDiv7);

});


// Coppy feature
document.getElementById("coppy-Btn7").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy7 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn7 = Coppy7 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn7 ;



// number coppy Feature
    const text = document.getElementById("Number7").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})