//Aqui vamos fazer a mudança de tema pelo botão Switch. Será escrito de duas maneiras: Uma com mais linhas de código e uma simplificada.

//Primeira forma de fazer:

function toggleMode(){
    const html = document.documentElement

    /*  if(html.classList.contains('light__mode')){
            html.classList.remove('light__mode')
        } else{
            html.classList.add('light__mode')
        }
    */

//Segunda forma de fazer(mais simplificada):

    html.classList.toggle('light__mode')
}


