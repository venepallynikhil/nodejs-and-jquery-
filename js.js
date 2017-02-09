        $(document).ready(function () {
            
            var URL = "json.json";
           
          
               
                http_request = new XMLHttpRequest();
           
            http_request.onreadystatechange = function () {
               
                if (http_request.readyState == 4) {
                  
                    var jsonObj = http_request.responseText;
                    jsonObj = JSON.parse(jsonObj);
                   
                    var i = 0
                    for (i = 0; i < jsonObj.length ; i++) {
                        var topnav = jsonObj[i].image;

                        $('#bottom_div').append($('<img>', { 
                                                            src : topnav ,
                                                            width : 60, 
                                                            height : 60, 
                                                            alt : "Test Image", 
                                                            title : "Test Image",
                                                            id: "image"+i,
                                                            onclick:"MaximizeImage(id);"
                                                        }

                                                        ));
                    }
                  
                }
            }          
            http_request.open("GET", URL, true);            
            http_request.send();


          
           

        });
