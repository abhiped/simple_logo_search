// call clearbit API for fetching images

function fetch_img(){
          let query= document.getElementById('basic-url').value;
          var request = new XMLHttpRequest();
          var url='https://logo.clearbit.com/'+query;
          request.open('GET', url);
          request.responseType = 'blob'

          request.onreadystatechange = function () {
            if (this.readyState === 4) {
              var reader = new FileReader();
              reader.onloadend = function() {
                var source= reader.result;
                if(document.getElementById("display-box").children.length>0)
                {
                  document.getElementById('display-logo').src=source;
                }
                else{
                var elem = document.createElement("img");
                elem.setAttribute("src", source);
                elem.setAttribute("id", "display-logo");
                elem.setAttribute("height", "200");
                elem.setAttribute("width", "200");

                // append it to your page
                
                document.getElementById('display-box').appendChild(elem);
                var elem2=document.createElement("a");
                elem2.setAttribute("href",source);
                elem2.setAttribute("Download","test.png")
                elem2.innerHTML="Want to do download the image?";
                document.getElementById('google-search').appendChild(elem2);
                }
              }
              reader.readAsDataURL(request.response);
            }
          };

          request.send();
          document.getElementById('google-search').style.display='inline-block';
        }
