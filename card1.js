// Card 1 Feature
// love Click Featur 
document.getElementById("love-btn").addEventListener("click" , function(e){
    e.preventDefault;

    const hard = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN = hard + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN;


})


// Call Click and cart coin and History feature
const history = document.getElementById("historyCard");
const coin = document.getElementById("coin");

document.getElementById("CallBtn").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call = parseInt(coin.innerText);

    if (call >= 20) {
        call -= 20; 
        coin.innerText = call;
        alert("📞 Call National Emergency Service 999..");
    } else if (call > 0 && call < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call < 0) {
        call = 0;
        coin.innerText = call;
    }

    // history feature
        // history Create
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("history-entry");


        const now = new Date();
        const dateTime = now.toLocaleTimeString();

        entryDiv.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> National Emergency Number </br> 999 </div> 
                <div class="time"> ${dateTime}</div>
            </div>`;

        history.appendChild(entryDiv);

});


// Coppy feature
document.getElementById("coppy-Btn").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn = Coppy + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn ;



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




// clear Button Feature
document.getElementById("clear").addEventListener("click", function(e){
    e.preventDefault();

    
    const historyClear = history.querySelectorAll(".history-entry");
    historyClear.forEach(entry => entry.remove());
});
