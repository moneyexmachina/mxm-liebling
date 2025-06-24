document.addEventListener("DOMContentLoaded", function () {
  function waitForGhostMembers(callback, retries = 20) {
    if (window.ghost && ghost.members && typeof ghost.members.get === "function") {
      callback();
    } else if (retries > 0) {
      setTimeout(() => waitForGhostMembers(callback, retries - 1), 250);
    } else {
      console.warn("Ghost members API not available after multiple attempts.");
    }
  }

  waitForGhostMembers(() => {
    ghost.members.get().then(function (member) {
      const joinHero = document.querySelector(".js-join-hero");
      const joinHeader = document.querySelector(".js-join-header");

      if (member) {
        if (joinHero) joinHero.style.display = "none";
        if (joinHeader) {
          joinHeader.textContent = "Account";
          joinHeader.setAttribute("href", "/#/portal/account");
        }
      } else {
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
});
