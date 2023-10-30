const menuBtn = document.getElementById("menu-btn");
const menuPage = document.getElementById("menu-page");

menuBtn.addEventListener("click", () => {
  if (menuPage.classList.contains("hidden")) {
    menuPage.classList.remove("hidden");
  } else {
    menuPage.classList.add("hidden");
  }
});

const accountNameLink = document.getElementById("account-name");
if (accountNameLink) {
  const accountInfoModal = document.getElementById("account-info-modal");
  accountNameLink.addEventListener("click", () => {
    if (accountInfoModal.classList.contains("hidden")) {
      accountInfoModal.classList.remove("hidden");
    } else {
      accountInfoModal.classList.add("hidden");
    }
  });
}

// Also change password
const changeLink = document.getElementById("show-password");
const passPage = document.getElementById("password-container");

if (changeLink) {
  changeLink.addEventListener("click", function () {
    if (passPage.classList.contains("hidden")) {
      passPage.classList.remove("hidden");
    } else {
      passPage.classList.add("hidden");
    }
    console.log("clicked");
  });
}

// Update history
let editBtn = document.querySelectorAll(".edit-btn");
editBtn.forEach(function (edit) {
  edit.addEventListener("click", function () {
    console.log("clocko");
    let num = edit.getAttribute("data-num");
    let fieldset = document.querySelectorAll(".fieldset" + num);
    edit.classList.add("hidden");
    fieldset.forEach(function (f) {
      f.removeAttribute("disabled");
    });

    let cancel = document.querySelectorAll(".del-btn" + num);
    let submit = document.querySelectorAll(".update-btn" + num);
    let closeBtn = document.querySelectorAll(".discard-btn" + num);

    closeBtn.forEach((cls) => {
      cls.classList.remove("hidden");
    });
    cancel.forEach(function (d) {
      d.classList.add("hidden");
    });
    submit.forEach(function (s) {
      s.classList.remove("hidden");
    });
  });
});

let cancelBtn = document.querySelectorAll(".discard-edit");
cancelBtn.forEach(function (close) {
  close.addEventListener("click", function () {
    close.classList.add("hidden");
    let num = close.getAttribute("data-num");
    let fieldset = document.querySelectorAll(".fieldset" + num);
    fieldset.forEach(function (f) {
      f.setAttribute("disabled", true);
    });

    let del = document.querySelectorAll(".del-btn" + num);
    let update = document.querySelectorAll(".update-btn" + num);
    del.forEach(function (d) {
      d.classList.remove("hidden");
    });

    update.forEach(function (s) {
      s.classList.add("hidden");
    });

    let edit = document.querySelectorAll(".edit-btn");
    edit.forEach(function (e) {
      e.classList.remove("hidden");
    });
  });
});

let cancelDonation = document.querySelectorAll(".del-donation");
cancelDonation.forEach(function (cancel) {
  cancel.addEventListener("click", function () {
    let num = cancel.getAttribute("data-num");
    let fieldset = document.querySelectorAll(".fieldset" + num);
    fieldset.forEach(function (f) {
      f.setAttribute("disabled", false);
    });
  });
});
