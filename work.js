const programs = document.querySelectorAll(".ps");
programs.forEach((item) => {
  const block = item.querySelector(".p-block");

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

const projects = document.querySelectorAll(".proj");
projects.forEach((item) => {
  const proj_block = item.querySelector(".proj-block");
  const proj_content = item.querySelector(".proj-content");
  const block_p = item.querySelector(".proj-des");

  proj_block.addEventListener("click", () => {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i] != item) {
        projects[i].classList.remove("open");
      } else {
        item.classList.toggle("open");
      }
    }
  });
});
