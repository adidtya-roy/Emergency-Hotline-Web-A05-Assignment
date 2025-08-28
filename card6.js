// Card 6 Feature
// love Click Featur 
document.getElementById("love-btn6").addEventListener("click" , function(e){
    e.preventDefault;

    const hard6 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN6 = hard6 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN6;

})

// Call Click and cart coin and History feature
const history6 = document.getElementById("historyCard");
const coin6 = document.getElementById("coin");
document.getElementById("CallBtn6").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call6 = parseInt(coin6.innerText);

    if (call6 >= 20) {
        call6 -= 20; 
        coin6.innerText = call6;
        alert("📞 Anti-Corruption Helpline 106..");
    } else if (call6 > 0 && call6 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call6 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call6 < 0) {
        call6 = 0;
        coin6.innerText = call6;
    }

    // history feature
        // history Create
        const entryDiv6 = document.createElement("div");
        entryDiv6.classList.add("history-entry");


        const now6 = new Date();
        const dateTime6 = now6.toLocaleTimeString();

        entryDiv6.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Anti-Corruption Helpline </br> 106 </div> 
                <div class="time"> ${dateTime6}</div>
            </div>`;

        history.appendChild(entryDiv6);

});


// Coppy feature
document.getElementById("coppy-Btn6").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy6 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn6 = Coppy6 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn6 ;



// number coppy Feature
    const text = document.getElementById("Number6").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})
