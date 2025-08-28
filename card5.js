// Card 5 Feature
// love Click Featur 
document.getElementById("love-btn5").addEventListener("click" , function(e){
    e.preventDefault;

    const hard5 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN5 = hard5 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN5;

})

// Call Click and cart coin and History feature
const history5 = document.getElementById("historyCard");
const coin5 = document.getElementById("coin");
document.getElementById("CallBtn5").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call5 = parseInt(coin5.innerText);

    if (call5 >= 20) {
        call5 -= 20; 
        coin5.innerText = call5;
        alert("📞 Women & Child Helpline 109..");
    } else if (call5 > 0 && call5 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call5 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call5 < 0) {
        call5 = 0;
        coin5.innerText = call5;
    }

    // history feature
        // history Create
        const entryDiv5 = document.createElement("div");
        entryDiv5.classList.add("history-entry");


        const now5 = new Date();
        const dateTime5 = now5.toLocaleTimeString();

        entryDiv5.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Women & Child Helpline </br> 109 </div> 
                <div class="time"> ${dateTime5}</div>
            </div>`;

        history.appendChild(entryDiv5);

});



// Coppy feature
document.getElementById("coppy-Btn5").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy5 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn5 = Coppy5 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn5 ;



// number coppy Feature
    const text = document.getElementById("Number5").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})
