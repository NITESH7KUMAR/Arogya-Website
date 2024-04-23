const imgs =document.querySelectorAll('.header-slider ul img');
const pre_btn =document.querySelector('.control-pre');
const next_btn =document.querySelector('.control-next');


let n=0;


function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }

    imgs[n].style.display = 'block';
}

changeSlide();

pre_btn.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }else{
        n =imgs.length-1;
    }

    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if(n < imgs.length-1){
        n++;
    }else{
        n =0;
    }

    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}


document.addEventListener("DOMContentLoaded", function() {
   
    // Add event listener for Profile and Notification
    document.querySelector('a[href="myprofile.html"]').addEventListener("click", function() {
        this.parentNode.classList.add("clicked");
    });

});

document.getElementById("log-out").addEventListener("click", function(event) {
    event.preventDefault();
    var confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      alert("Logged out successfully.");
      // Redirect to logout page or perform logout action here
    }
  });

  ////////////////////Prescription

  document.getElementById("take-photo").addEventListener("click", function() {
    var allowCamera = confirm("Do you want to take a photo?");
    if (allowCamera) {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'camera';
      input.click();
    }
  });
  document.getElementById("upload-prescription").addEventListener("click", function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*,application/pdf';
      input.click();
    });
  



    ///////////////////////Delivery


    let pins = {
      844116: "Saidpur",
      844120: "Hajipur",
      144411: "LPU",
      144412: "Phagwara",
      144415: "Jalandhar",
      144418: "Amritsar",
      844140: "Patna",
      110001: "Delhi",
    };

    function cpin() {
      let pin = document.getElementById("pinc").value;
      if (pin.length !== 6) {
        alert("Enter a valid 6-digit Pincode");
        return;
      }

      let tobe = pins[pin];
      console.log("Pincode matched:", tobe);
      let deliveryTitle = document.getElementById("deliveryTitle");
      let pinhere = document.getElementById("pinhere");
      
      if (tobe === undefined) {
        alert("Currently not deliverable here, but we'll be there soon!");
        return;
      } else {
        console.log("Changing delivery title to:", `Delivery to ${tobe}`);
        deliveryTitle.textContent = `Delivery to ${tobe}`;
        pinhere.textContent = tobe;
         localStorage.setItem('selectedPincode', pin);
    localStorage.setItem('selectedAddress', tobe);
        // Redirect to the main page
        window.location.href = "/";
      }
    }

    function goBack() {
      window.location.href = "/"; // Redirect to the main page
    }

    // JavaScript
    document.addEventListener("DOMContentLoaded", function() {
        var deliveryContainer = document.getElementById("deliveryToIndiaContainer");
        var deliveryTitle = document.getElementById("deliveryTitle");

        // Function to toggle the visibility of the delivery container
        function toggleDeliveryContainer() {
            if (deliveryContainer.style.display === "none") {
                deliveryContainer.style.display = "block";
            } else {
                deliveryContainer.style.display = "none";
            }
        }

        // Event listener to toggle the container when clicking on "Delivery to India"
        deliveryTitle.addEventListener("click", toggleDeliveryContainer);
    });



    function openModal() {
  document.getElementById("pinModal").style.display = "block";
}

function closeModal() {
  document.getElementById("pinModal").style.display = "none";
}

