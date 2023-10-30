const sidebarBtn = document.getElementById("sm-menu-bar");
const xsSidebarBtn = document.getElementById("sm-menu-bar-sm");
const sidebarPage = document.getElementById("small-sidebar");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarOverlay = document.getElementById("sidebar-overlay");

sidebarBtn.addEventListener("click", () => {
    if (sidebarPage.classList.contains("hidden")) {
        sidebarPage.classList.remove("hidden");
        sidebarOverlay.classList.remove("hidden");
    }
})
sidebarClose.addEventListener("click", () => {
    sidebarPage.classList.add("hidden");
    sidebarOverlay.classList.add("hidden");
})

sidebarOverlay.addEventListener("click", function () {
    sidebarPage.classList.add("hidden");
    sidebarOverlay.classList.add("hidden");
})

const changeLink = document.getElementById("changeLink");
const passPage = document.getElementById("password-page");

if (changeLink) {
    changeLink.addEventListener("click", function () {
        if (passPage.classList.contains("hidden")) {
            passPage.classList.remove("hidden");
        } else {
            passPage.classList.add("hidden");
        }
    });
}

// Large device Account dropdown
const accountsLink = document.getElementById("accounts-link");
if (accountsLink) {
    const accountDropdown = document.getElementById("account-dropdown");
    const caretIcon = document.getElementById("caret");
    accountsLink.addEventListener("click", () => {
        if (accountDropdown.classList.contains("hidden")) {
            accountDropdown.classList.remove("hidden");
            caretIcon.classList.remove("bi-caret-down-fill")
            caretIcon.classList.add("bi-caret-up-fill")
        } else {
            accountDropdown.classList.add("hidden");
            caretIcon.classList.remove("bi-caret-up-fill")
            caretIcon.classList.add("bi-caret-down-fill")
        }
    })
}

// Small device dropdown 
const mdAccountsLink = document.getElementById("md-accounts-link");
if (mdAccountsLink) {
    const mdAccountDropdown = document.getElementById("md-account-dropdown");
    const mdCaretIcon = document.getElementById("md-caret");

    mdAccountsLink.addEventListener("click", () => {
        if (mdAccountDropdown.classList.contains("hidden")) {
            mdAccountDropdown.classList.remove("hidden");
            mdCaretIcon.classList.remove("bi-caret-down-fill")
            mdCaretIcon.classList.add("bi-caret-up-fill")
        } else {
            mdAccountDropdown.classList.add("hidden");
            mdCaretIcon.classList.remove("bi-caret-up-fill")
            mdCaretIcon.classList.add("bi-caret-down-fill")
        }
    })
}

// Small device dropdown 
const smAccountsLink = document.getElementById("sm-accounts-link");
if (smAccountsLink) {
    const smAccountDropdown = document.getElementById("sm-account-dropdown");
    const smCaretIcon = document.getElementById("sm-caret");

    smAccountsLink.addEventListener("click", () => {
        if (smAccountDropdown.classList.contains("hidden")) {
            smAccountDropdown.classList.remove("hidden");
            smCaretIcon.classList.remove("bi-caret-down-fill")
            smCaretIcon.classList.add("bi-caret-up-fill")
        } else {
            smAccountDropdown.classList.add("hidden");
            smCaretIcon.classList.remove("bi-caret-up-fill")
            smCaretIcon.classList.add("bi-caret-down-fill")
        }
    })
}

// Search accounts 
let searchKey = document.getElementById("searchInput");
if (searchKey) {
    searchKey.addEventListener("keyup", function () {
        let filter = searchKey.value.toUpperCase();
        let tr = document.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td");
            let text = "";
            for (let j = 0; j < td.length; j++) {
                text += td[j].textContent.toUpperCase();
            }
            if (text.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    });
}

// small device search account
let smSearchKey = document.getElementById("searchSmInput");
if (smSearchKey) {
    smSearchKey.addEventListener("keyup", function () {
        let filter = smSearchKey.value.toUpperCase();
        let tr = document.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td");
            let text = "";
            for (let j = 0; j < td.length; j++) {
                text += td[j].textContent.toUpperCase();
            }
            if (text.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    });
}
