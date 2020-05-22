function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate"
        ).textContent = new Date().toLocaleDateString("en-gb", options);
} catch (e) {
    alert ("error")
}


function showPancake() {
    var date = new Date();
    var dayOfWeek = date.getDay();
  
    if (dayOfWeek == 5) {
      var pancake = document.getElementById("pancake");
      pancake.style.display = "block";
    }
  }
  
  showPancake()