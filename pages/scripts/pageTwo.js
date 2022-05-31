
    function pageTwo() {

        //Store a content on page two, using other images.
        var pageTwoContent =    "<img class=\"item-size\" src=\"../images/items/item18.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item19.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item20.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item21.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item22.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item23.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item24.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item25.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item26.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item27.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item28.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item29.jpg\"/>" +

                                "<img class=\"item-size\" src=\"../images/items/item30.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item3.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item4.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item5.jpg\"/>";

        // Replace html content to the item div.
        document.getElementById("item-div").innerHTML = pageTwoContent;

        // Change page two button color to indicate the active page.

        document.getElementById("2").setAttribute("class", "items-toggle toggle-active");
        
        document.getElementById("1").setAttribute("class", "items-toggle");
        document.getElementById("3").setAttribute("class", "items-toggle");
        document.getElementById("4").setAttribute("class", "items-toggle");
        document.getElementById("5").setAttribute("class", "items-toggle");

        //Go back to the top of the page.
        window.scrollTo(0,0);
    }

    document.getElementById("2").addEventListener("click", pageTwo);