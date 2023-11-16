const formJs = document.querySelector("#formJs");
let inputJs = document.querySelector("#inputJs");
formJs.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputJs.value.trim() !== "") {
    window.location.href = "game.html";
    localStorage.setItem("1234", inputJs.value);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar tu nombre",
    });
  }
});


