//Obtener los elementos de la clase close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

        //Agregar un evento click a cada elemento
        link.addEventListener("click",function(ev){
           ev.preventDefault();     
            let content = document.querySelector('.content');
           
            //Quitarle las clases de animación
            content.classList.remove("animate__fadeInDown");
            content.classList.remove("animate__animated");

           //Agregar clases para animar su salida
           content.classList.add("animate__fadeOutUp");
           content.classList.add("animate__animated");

            setTimeout(function(){
                location.href= "/piztux.github.com/boletines/";
            },600);
           

           return false;
        });
});

