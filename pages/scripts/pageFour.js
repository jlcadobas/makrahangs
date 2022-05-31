
    function pageFour() {

        var pageFourContent =   "<img class=\"item-size\" src=\"../images/items/item22.jpg\"/>" +
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
                                "<img class=\"item-size\" src=\"../images/items/item5.jpg\"/>" +

                                "<img class=\"item-size\" src=\"../images/items/item7.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item8.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item9.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item10.jpg\"/>";

        document.getElementById("item-div").innerHTML = pageFourContent;
        document.getElementById("4").setAttribute("class", "items-toggle toggle-active");

        document.getElementById("1").setAttribute("class", "items-toggle");
        document.getElementById("2").setAttribute("class", "items-toggle");
        document.getElementById("3").setAttribute("class", "items-toggle");
        document.getElementById("5").setAttribute("class", "items-toggle");

        window.scrollTo(0,0);
    }

    document.getElementById("4").addEventListener("click", pageFour);