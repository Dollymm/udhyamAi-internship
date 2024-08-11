

document.getElementById('contactBtn').onclick = function() {
    document.getElementById('contactModal').style.display = 'flex';
}
// closing button functionality
document.getElementById('closeBtn').onclick = function() {
    document.getElementById('contactModal').style.display = 'none';
}
//
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    
    //for name
    const nameInput = document.querySelector('input[type="text"]');
    const name = nameInput.value;
    console.log("Name:", name);

//for email
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;
   
    console.log("Email:", email);

    


    //  from submission
    document.getElementById('submitMessage').classList.remove('hidden');

   
    nameInput.value = "";
    emailInput.value = "";
}
