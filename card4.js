// Card 4 Feature
// love Click Featur 
document.getElementById("love-btn4").addEventListener("click" , function(e){
    e.preventDefault;

    const hard4 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN4 = hard4 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN4;

})

// Call Click and cart coin and History feature
const history4 = document.getElementById("historyCard");
const coin4 = document.getElementById("coin");
document.getElementById("CallBtn4").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call4 = parseInt(coin4.innerText);

    if (call4 >= 20) {
        call4 -= 20; 
        coin4.innerText = call4;
        alert("📞 Ambulance Service 1994-999999..");
    } else if (call4 > 0 && call4 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call4 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call4 < 0) {
        call4 = 0;
        coin4.innerText = call4;
    }

    // history feature
        // history Create
        const entryDiv4 = document.createElement("div");
        entryDiv4.classList.add("history-entry");


        const now4 = new Date();
        const dateTime4 = now4.toLocaleTimeString();

        entryDiv4.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Ambulance Service </br> 1994-999999 </div> 
                <div class="time"> ${dateTime4}</div>
            </div>`;

        history.appendChild(entryDiv4);

});


// Coppy feature
document.getElementById("coppy-Btn4").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy4 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn4 = Coppy4 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn4 ;



// number coppy Feature
    const text = document.getElementById("Number4").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})
