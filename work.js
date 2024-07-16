const programs = document.querySelectorAll(".ps");
programs.forEach((item) => {
  const block = item.querySelector(".p-block");
  const content = item.querySelector(".p-content");
  const block_p = item.querySelector(".p-des");

  block.addEventListener("click", () => {
    for (var i = 0; i < programs.length; i++) {
      if (programs[i] != item) {
        programs[i].classList.remove("open");
      } else {
        item.classList.toggle("open");
      }
    }
  });
});
