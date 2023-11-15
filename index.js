function peligro(){
    let link = "peligro.jpg"
    let imagen = document.createElement("img")
    imagen.setAttribute("src", link);
    imagen.style.zIndex=1;
    document.getElementsByTagName("p")[0].append(imagen);
    document.getElementsByTagName("body")[0].style.backgroundColor="#DD4E33"; 
    document.getElementsByTagName("html")[0].style.backgroundColor="#DD4E33";
    document.getElementsByTagName("p")[0].style.width="98%";
    document.getElementsByTagName("p")[0].style.height="100%";
    
    link = "salvacion.php";
    let enlace = document.createElement("a")
    enlace.setAttribute("href", link);
    enlace.setAttribute("id", "salvar");
    enlace.style.zIndex=2;
    enlace.style.position="absolute";
    enlace.style.backgroundColor="#E16A5B";
    enlace.style.color="white";
    enlace.style.border="none";
    enlace.style.borderRadius="5px";
    enlace.style.padding="1% 3% 1% 3%";
    enlace.style.top="60%";
    enlace.style.left="59.5%";
    document.getElementsByTagName("body")[0].append(enlace);
    document.getElementById("salvar").innerHTML="Volver a estar a Salvo";
}