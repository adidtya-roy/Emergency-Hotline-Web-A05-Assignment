🌐*Assignment-5* : **Emergency Hotline Web Project**

### Responsiveness
- Responive Only for Desktop.

## 📌 Overview
This is a simple **Emergency Hotline Web Application** built using **HTML, CSS (Tailwind CSS and daisyUI )** and **Vanilla JavaScript**.  

###### 🧱 Features

### 1. Navbar
- Website name & logo on the left.
- Heart icon , Coin count (default 100), and Copy count on the right.
- Live updates when users interact with cards (like incrementing hearts or coins).

### 2. Hero Section
- Full-width gradient background.
- Centered logo at the top.
- Section title in the center.
- Slogan at the bottom center.

### 3. Emergency Hotline Cards
- Minimum 9 cards displayed.
- Each card contains:
  - Icon / Image  
  - Service Name (local language & English)  
  - Hotline number  
  - Category badge  
  - 💗 Heart icon  
  - Call button 
  - Copy button  

### 4. Call Functionality
- Deducts *20 coins* per call.
- Alerts user with service name and number.
- If coins are insufficient, alerts the user.
- Call History dynamically updates with:
  - Service name
  - Service number
  - Exact time of call

### 5. Call History Section
- Shows all called services with name, number, and time.
- Clear History button removes all call entries.

### 6. Copy Functionality
- Clicking Copy button increases the copy count.
- Hotline number is copied to the clipboard.

### 7. Heart Icons
- Clicking 💗 on any card increases the heart count in the navbar.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

#### 6. Answer the following questions clearly:

## 1 📌 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
🔹 `getElementById`
- নির্দিষ্ট একটি element কে তার  unique `id` দিয়ে খুঁজে বের করে।  
- সবসময় একটি element রিটার্ন করে।  

## 2 📌 How do you create and insert a new element into the DOM?
🔹 DOM (Document Object Model) create a new wlement : *document.createElement();*

## 3 📌 What is Event Bubbling and how does it work?

🔹 Event Bubbling হলো JavaScript এর একটি mechanism, যেখানে কোনো child element এ event ঘটলে সেটি প্রথমে সেই child element এ ট্রিগার হয়, তারপর ধাপে ধাপে তার parent, grandparent হয়ে document পর্যন্ত propagate হয়।  


## 4 📌 What is Event Delegation in JavaScript? Why is it useful?
🔹 Event Delegation হলো একটি টেকনিক যেখানে আমরা আলাদা আলাদা child element এ event listener না দিয়ে, তাদের common parent element এ একটি event listener বসাই। 

## 📌 What is the difference between `preventDefault()` and `stopPropagation()` methods?

🔹 `preventDefault()`
- এই মেথডটি default behavior বন্ধ করে দেয়।  
- যেমন: একটি form এর submit বাটন ক্লিক করলে normally পেজ reload হয়। কিন্তু `preventDefault()` ব্যবহার করলে reload হবে না।  












