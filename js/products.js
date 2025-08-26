  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const heading1 = document.getElementById("heading1");
  const points1 = document.getElementById("points1");
  const heading2 = document.getElementById("heading2");
  const points2 = document.getElementById("points2");

  const popupData = {
    "PHARMACEUTICALS": {
      title : "PHARMACEUTICALS",
      image: "./images/p1.png",
      heading1: "Research & Development",
      points1: [
        "We are developing innovative NDA’s & ANDA’s for in licensing & out licensing.",
        "Partnering with Global Companies.",
        "Developing Nano Technology, Micronization, & extended release."
      ],
      heading2: "Products",
      points2: [
        "API’s & Bulk Drugs",
        "ANDA Formulations",
        "Specialty Drugs",
        "Oncology",
        "Infectious Diseases",
      ]
    },
    "VACCINES": {
      title : "VACCINES",
      image: "./images/p2.png",
      heading1: "Reasearch & Devolopment",
      points1: [
        "The company developed innovative proprietary cell line platform “Novacell” (an embryonic derived Stem Cells) for producing pure, high titer (potent) and cost-effective viral vaccines (preventable and therapeutic).",
        "We have developed robust cGMP manufacturing technology with high purity than the currently available traditional vaccine manufacturers.",
      ],
      heading2: "Products",
      points2: [
        "Infectious Diseases",
        "Oncolytic Virus Platform",
        "mRNA Covid – 19 Universal Vaccine",
        "Viral Vector Platform (AAV & BV)",
        "BV driven VLP Platform ",
      ]
    },
    "BIOLOGICS": {
      title : "BIOLOGICS",
      image: "./images/p3.png",
      heading1: "Reasearch & Devolopment",
      points1: [
        "We developed Novacell proprietary platform technology for producing Innovative biologics for affordable, accessible and timely available products. ",
        "We are developing highly immunogenic antibodies in a proprietary technology (Specific Binding and Highly Immunogenic and effective) . ",
      ],
      heading2: "Products",
      points2: [
        "Therapeutic Proteins",
        "Gene Therapy",
        "Monoclonal Antibodies",
        "Polyclonal Antibodies",
      ]
    },
    "BIOSIMILARS": {
      title : "BIOSIMILARS",
      image: "./images/p4.png",
      heading1: "Research & Development",
      points1: [
        "Our Focus is to develop therapeutics for diabetics, cancer and infectious diseases.",
        "Our team has the vision for commercial launch of novel Bio-Drugs, Biosimilars using manufacturing Platform Technologies (E coli, Yeast, Mammalian (CHO), Egg Embryonic, Insect cell (SF9) culture technologies). Our team has also direct hands-on experience in using these platform technologies and made biological drugs in 60,000 liters bioreactors and 1000-2000 liters of disposable single use systems (Upstream & Downstream) cost effectively and reduced time to commercial launch.",
      ],
      heading2: "Products",
      points2: [
        "Insulin & Insulin Analogs",
        "Monoclonal Antibodies (MABS)",
        "Conjugated Vaccines"
      ]
    },
    "GENOMIC DIAGNOSTICS": {
      title : "GENOMIC DIAGNOSTICS",
      description : "Genomic Diagnostics is a DBA of ABS Inc., headquartered in New Jersey, USA and operations in Pennsylvanian. We have been conducting research, product development, manufactures bacterial and viral diagnostic kits, reagents, reference standards for medical diagnostic applications.",
      image: "./images/p5.png",
      heading1: "Research & Development",
      points1: [
        "Molecular Diagnostics",
        "Serological Diagnostics",
        "Services"
      ],
      heading2: "Products",
      points2: [
        "VTM and Swabs best quality sold globally",
        "RT-PCR Kits for Covid-19",
        "Rapid Antigen Kits for Covid-19",
        "Face Mask & Gloves for Hospitals",
      ]
    }
  };

  function openPopup(buttonText) {
    const data = popupData[buttonText];
    if (!data) return;

    // Set top heading and description
    popupTitle.textContent = data.title;
    popupDescription.textContent = data.description;

    // Set image and right section content
    popupImg.src = data.image;
    heading1.textContent = data.heading1;
    heading2.textContent = data.heading2;

    points1.innerHTML = data.points1.map(item => `<li>${item}</li>`).join("");
    points2.innerHTML = data.points2.map(item => `<li>${item}</li>`).join("");

    popup.style.display = "block";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  document.querySelectorAll(".card .button").forEach(button => {
    button.addEventListener("click", () => {
      openPopup(button.textContent.trim());
    });
  });