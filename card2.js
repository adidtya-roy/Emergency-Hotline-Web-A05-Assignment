// Card 2 Feature
// love Click Featur 
document.getElementById("love-btn2").addEventListener("click" , function(e){
    e.preventDefault;

    const hard2 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN2 = hard2 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN2;


})

// Call Click and cart coin and History feature
const history2 = document.getElementById("historyCard");
const coin2 = document.getElementById("coin");
document.getElementById("CallBtn2").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call2 = parseInt(coin2.innerText);

    if (call2 >= 20) {
        call2 -= 20; 
        coin2.innerText = call2;
        alert("📞 Call Police Helpline Number Service 999..");
    } else if (call2 > 0 && call2 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call2 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call2 < 0) {
        call2 = 0;
        coin2.innerText = call2;
    }

    // history feature
        // history Create
        const entryDiv2 = document.createElement("div");
        entryDiv2.classList.add("history-entry");


        const now2 = new Date();
        const dateTime2 = now2.toLocaleTimeString();

        entryDiv2.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Police Helpline Number </br> 999 </div> 
                <div class="time"> ${dateTime2}</div>
            </div>`;

        history.appendChild(entryDiv2);

});


// Coppy feature
document.getElementById("coppy-Btn2").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy2 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn2 = Coppy2 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn2 ;



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