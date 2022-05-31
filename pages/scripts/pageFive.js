
    function pageFive() {

        var pageFiveContent =   "<img class=\"item-size\" src=\"../images/items/item11.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item12.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item13.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item14.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item15.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item16.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item17.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item18.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item19.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item20.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item21.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item22.jpg\"/>" +

                                "<img class=\"item-size\" src=\"../images/items/item23.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item24.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item25.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item26.jpg\"/>";

        document.getElementById("item-div").innerHTML = pageFiveContent;
        document.getElementById("5").setAttribute("class", "items-toggle toggle-active");

        document.getElementById("1").setAttribute("class", "items-toggle");
        document.getElementById("2").setAttribute("class", "items-toggle");
        document.getElementById("3").setAttribute("class", "items-toggle");
        document.getElementById("4").setAttribute("class", "items-toggle");

        window.scrollTo(0,0);
    }

    document.getElementById("5").addEventListener("click", pageFive);