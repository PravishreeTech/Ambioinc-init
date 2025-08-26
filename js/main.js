////////////////////// NAVBAR RESPONSIVE //////////////////////
const toggleBtn = document.getElementById('mobileToggle'); // fixed id
const nav = document.getElementById('navigation'); // consistent with HTML

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// DNA Animation: Abstract helix with circles and lines
const canvas = document.getElementById('dna-animation');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 280;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawDNA(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const helixCount = 2;
  const points = 30;
  const width = canvas.width;
  const height = canvas.height;
  for (let h = 0; h < helixCount; h++) {
    ctx.strokeStyle = h === 0 ? '#1da3be' : '#2673b9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const x = (width / points) * i;
      const y =
        height / 2 +
        Math.sin(i * 0.5 + h + time / 900) *
        (48 + h * 12);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Draw moving nodes
    for (let i = 0; i < points; i++) {
      const x = (width / points) * i;
      const y =
        height / 2 +
        Math.sin(i * 0.5 + h + time / 900) *
        (48 + h * 12);
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        i % 3 === 0 ? 7 : 4,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = h === 0
        ? 'rgba(29,163,190,0.21)'
        : 'rgba(38,115,185,0.18)';
      ctx.fill();
    }
  }
  requestAnimationFrame(drawDNA);
}
requestAnimationFrame(drawDNA);

////////////////////// HOME PAGE SLIDER SECTION //////////////////////
$(document).ready(function () {
    $('.card-row').carousel({
        padding: 200
    });
    autoplay(); 
    function autoplay() {
        $('.card-row').carousel('next');
        setTimeout(autoplay, 4500);
    }
});

////////////////////// INVESTORS - MAPS SECTION START //////////////////////
// Google Maps JavaScript API
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
async
defer

// Initialize and add the map
function initMap() {
    const centerCoords = { lat: 20.0, lng: 0.0 }; // World center

    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 2,
        center: centerCoords,
        mapTypeId: 'roadmap'
    });

    // Optional: add a marker
    new google.maps.Marker({
        position: centerCoords,
        map,
        title: "Center of the World",
    });
}
////////////////////// INVESTORS - MAPS SECTION END //////////////////////

////////////////////// HOME - CONTACT SECTION START //////////////////////
const serviceDropdown = document.getElementById("serviceDropdown");
    const productDropdown = document.getElementById("productDropdown");

    const productOptions = {
      Pharmaceuticals: ["pharma1", "E-pharma2", "pharma3", "pharma4"],
      Vaccines: ["iOS App", "Android App", "Cross Platform", "Wearable App"],
      Biologics: ["Logo Design", "Wireframe", "Mobile UI", "Web UI"],
      Biosimilars: ["Keyword Research", "Technical SEO", "On-page SEO", "Backlinking"],
      Genomic: ["Social Media", "Email Campaigns", "Influencer Ads", "PPC"],
    };

    serviceDropdown.addEventListener("change", function () {
      const selectedService = this.value;
      productDropdown.innerHTML = `<option value="">Select a Product</option>`;
      
      if (productOptions[selectedService]) {
        productOptions[selectedService].forEach(product => {
          const option = document.createElement("option");
          option.value = product;
          option.textContent = product;
          productDropdown.appendChild(option);
        });
      }
    });
////////////////////// HOME - CONTACT SECTION END //////////////////////

////////////////////// HOME - FOOTER SECTION END //////////////////////
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  if (email) {
    alert("Thank you for subscribing with: " + email);
    document.getElementById("subscribeForm").reset();
  }
});
////////////////////// HOME - FOOTER SECTION END //////////////////////