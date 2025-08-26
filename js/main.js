////////////////////// NAVBAR RESPONSIVE //////////////////////
const toggleBtn = document.getElementById('mobileToggle'); // fixed id
const nav = document.getElementById('navigation'); // consistent with HTML

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
});


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