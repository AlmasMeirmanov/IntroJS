alert("Hello! I am your navigator")
var park = confirm("Do you want to go to the park?")
if (park === true) {
  alert("Ok, let's go to the park!")
  var name = prompt(" Which park?")
  alert(`Sounds good, let's go to the ${name}!`)
} else {
  alert("Somewhere else?")
  var zoo = confirm("What about the zoo?")
  if (zoo === true) {
    alert("The zoo it is!!")
    var trans = confirm("Do you want to drive your car?")
    if (trans === true) {
      alert("It will take you 1 hour")
    } else {
      var trans = confirm("If you want to get there faster, let's do ROCKET?")
      if (trans === true) {
        alert("You are a speed demon! It will take you 1 sec!!")
      } else {
        alert("CHICKEN!!!")
      }
    }
  } else {
    alert("Ok, then see you later.")
  }
}
