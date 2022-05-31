
    function pageThree() {

        var pageThreeContent =  "<img class=\"item-size\" src=\"../images/items/item5.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item7.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item8.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item9.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item10.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item11.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item12.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item13.jpg\"/>" +
                                
                                "<img class=\"item-size\" src=\"../images/items/item14.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item15.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item16.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item17.jpg\"/>" +

                                "<img class=\"item-size\" src=\"../images/items/item18.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item19.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item20.jpg\"/>" +
                                "<img class=\"item-size\" src=\"../images/items/item21.jpg\"/>";

        document.getElementById("item-div").innerHTML = pageThreeContent;
        document.getElementById("3").setAttribute("class", "items-toggle toggle-active");

        document.getElementById("1").setAttribute("class", "items-toggle");
        document.getElementById("2").setAttribute("class", "items-toggle");
        document.getElementById("4").setAttribute("class", "items-toggle");
        document.getElementById("5").setAttribute("class", "items-toggle");

        window.scrollTo(0,0);
    }

    document.getElementById("3").addEventListener("click", pageThree);