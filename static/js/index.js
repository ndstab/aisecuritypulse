window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Navbar burger toggle (from the Nerfies template)
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Copy-to-clipboard for the BibTeX block
  $("#copy-bibtex").on("click", function () {
    var text = document.getElementById("bibtex-code").innerText;
    var btn = this;
    navigator.clipboard.writeText(text).then(function () {
      var original = btn.innerText;
      btn.innerText = "Copied!";
      setTimeout(function () { btn.innerText = original; }, 1800);
    });
  });
});
