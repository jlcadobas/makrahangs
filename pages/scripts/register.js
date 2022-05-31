
    var log = "sign";

    //Change content of form into register inputs.
    function registerHere() {

        if (log == "sign") {

            //Store the content in registerContent.
            var registerContent =   "<div>" +
                                        "<label> Username: </label>" + 
                                        "<input type=\"text\" />" +
                                    "</div>" + 

                                    "<div>" +
                                        "<label> Email: </label>" + 
                                        "<input type=\"text\" />" +
                                    "</div>" + 

                                    "<div>" +
                                        "<label> Password: </label>" +
                                            "<input type=\"password\" />" +
                                    "</div>" +

                                    "<button type=\"submit\"> Register </button>" +
                                    "<p> Have an account already? Sign-in <span id=\"brown\"> here. </span></p>";
                                        
                document.getElementById("formRegister").innerHTML = registerContent;
                log = "register";
        }

            else if(log == "register") {

                var signContent =   "<div>" +
                                        "<label> Email: </label>" + 
                                        "<input type=\"text\" />" +
                                    "</div>" + 

                                    "<div>" +
                                        "<label> Password: </label>" +
                                            "<input type=\"password\" />" +
                                    "</div>" +

                                    "<button type=\"submit\"> Sign in </button>" +
                                    "<p> Don't have an account yet? Register <span id=\"brown\"> here. </span></p>";
                    
                    document.getElementById("formRegister").innerHTML = signContent;
                    state = "sign";
            }
    }

    //Add event listener to the span with id="brown" by clicking.
    document.getElementById("brown").addEventListener("click", registerHere);
    document.getElementById("brown")[1].addEventListener("click", registerHere);



    