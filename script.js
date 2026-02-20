/* ==================================
   Bella's Italian Kitchen Script
   ================================== */


/* Smooth Scroll Navigation */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


/* Reservation Form Handling */
const reservationForm = document.getElementById('reservation-form');

if(reservationForm){

  reservationForm.addEventListener('submit', function(e){
    e.preventDefault();

    const inputs = reservationForm.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
      if(input.value.trim() === ""){
        valid = false;
      }
    });

    if(!valid){
      alert("Please complete all reservation fields.");
      return;
    }

    const name = inputs[0].value;
    const button = reservationForm.querySelector('button');

    // Simulate sending
    button.innerText = "Submitting Reservation...";
    button.disabled = true;

    setTimeout(() => {

      reservationForm.innerHTML = `
        <div style="
          background:white;
          padding:30px;
          border-radius:10px;
          box-shadow:0 6px 18px rgba(0,0,0,0.15);
        ">
          <h2>Reservation Request Received!</h2>
          <p>Thank you, <strong>${name}</strong>.</p>
          <p>We will call you shortly to confirm your table.</p>
          <p style="margin-top:10px;">📞 Confirmation usually happens within 1 hour.</p>
        </div>
      `;

    }, 1400);

  });
}


/* Navbar Shadow on Scroll */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    navbar.style.boxShadow = "0 6px 18px rgba(0,0,0,0.18)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});
