// Card 3 Feature
// love Click Featur 
document.getElementById("love-btn3").addEventListener("click" , function(e){
    e.preventDefault;

    const hard3 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN3 = hard3 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN3;


})

// Call Click and cart coin and History feature
const history3 = document.getElementById("historyCard");
const coin3 = document.getElementById("coin");
document.getElementById("CallBtn3").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call3 = parseInt(coin3.innerText);

    if (call3 >= 20) {
        call3 -= 20; 
        coin3.innerText = call3;
        alert("📞 Call Fire Service 999..");
    } else if (call3 > 0 && call3 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call3 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call3 < 0) {
        call3 = 0;
        coin3.innerText = call3;
    }

    // history feature
        // history Create
        const entryDiv3 = document.createElement("div");
        entryDiv3.classList.add("history-entry");


        const now3 = new Date();
        const dateTime3 = now3.toLocaleTimeString();

        entryDiv3.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Fire Service Number </br> 999 </div> 
                <div class="time"> ${dateTime3}</div>
            </div>`;

        history.appendChild(entryDiv3);

});


// Coppy feature
document.getElementById("coppy-Btn3").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy3 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn3 = Coppy3 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn3 ;



// number coppy Feature
    const text = document.getElementById("Number").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})