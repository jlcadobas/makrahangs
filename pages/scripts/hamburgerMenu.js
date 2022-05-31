
    // Store a value to know if the hamburger button pop-up is closed or not.
    var state = "close";

    function openMenu() {

        // If close, then show menu.
        if (state == "close") {

            document.getElementsByClassName('hide')[0].setAttribute("class", "hide show-menu");
            state = "open";
        }

        // Else, close menu.
        else {

            document.getElementsByClassName('hide')[0].setAttribute("class", "hide");
            state = "close";
        }
    }

    // Add event listener to hamburger menu, and the close link inside show menu.
    document.getElementsByClassName('hamburger-menu')[0].addEventListener("click", openMenu);
    document.getElementById('close').addEventListener("click", openMenu);