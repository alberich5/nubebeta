 function cargaContextoCanvas(idCanvas){
               var elemento = document.getElementById(idCanvas);
               if(elemento && elemento.getContext){
                  var contexto = elemento.getContext('2d');
                  if(contexto){
                    return contexto;
                  }
               }
               return FALSE;
            }
            
            
            function registraBusqueda(){
                var busqueda = "<h3 color='#fff'>" + document.getElementById('buscador').value + "</h3>";
                localStorage.setItem("ultimaBusqueda", busqueda);
            }
                
                function mostrarBusqueda (){
                    if(localStorage.getItem("ultimaBusqueda") != undefined){
                        var contenedor = document.getElementById('busquedasRecientes');
                        contenedor.innerHTML +=  localStorage.getItem("ultimaBusqueda");
                    }  
                }
                
            window.onload = function(){
                    var ctx = cargaContextoCanvas('lienzo');
                    if(ctx){
                        var img = new Image();
                        img.src = '../images/HTML5logo.svg';
                        img.onload = function(){
                        ctx.drawImage(img, 40, 10);
                        }
                    }
                mostrarBusqueda();
                }