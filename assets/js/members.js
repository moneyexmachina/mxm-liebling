document.addEventListener("DOMContentLoaded", function () {
  if (!window.ghost || !ghost.members || !ghost.members.get) {
    return;
  }

  ghost.members.get().then(function (member) {
    const joinHero = document.querySelector(".js-join-hero");
    const joinHeader = document.querySelector(".js-join-header");

    if (member) {
      // User is signed in
      if (joinHero) joinHero.style.display = "none";
      if (joinHeader) {
        joinHeader.textContent = "Account";
        joinHeader.setAttribute("href", "/#/portal/account");
      }
    } else {
      // Not signed in
      if (joinHero) {
        joinHero.textContent = "Join the Project";
        joinHero.setAttribute("href", "/#/portal/");
        joinHero.style.display = "inline-block";
      }
      if (joinHeader) {
        joinHeader.textContent = "Join";
        joinHeader.setAttribute("href", "/#/portal/");
      }
    }
  });
});

