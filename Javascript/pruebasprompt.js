let nombre = prompt("Como es tu nombre?");
nombre = nombre.toLowerCase()


if(nombre === "francisco"){
    alert (`Bienvenido ${nombre}`);
    

}
else{
    let vip = prompt("Tienes pase VIP responda 'si' o 'no'");
    vip = vip.toLowerCase()
    if(vip === "si") {
        alert (`Bienvenido ${nombre}`);
        
    }
    else if(vip === "no"){
        let entrada = prompt("Tienes entrada responda 'si' o 'no'");
        entrada = entrada.toLowerCase();
        if (entrada === "si") {
            alert(`Bienvenido ${nombre}`)

            
        }
        else if(entrada === "no"){
            let compra = prompt("Quiere comprar? responda 'si' o 'no'");
            compra = compra.toLowerCase();
            if (compra === "no") {
                alert ("Nos vemos la proxima")
                
            }
            else if (compra === "si"){
                let dinero = Number(prompt("cuanto dinero tiene?"))
                if (dinero >= 1000) {
                    alert (`Bienvenido ${nombre}`)
                    
                }
                else{
                    alert("Nos vemos la proxima")

                }
            }

        }
    }
    
    


}