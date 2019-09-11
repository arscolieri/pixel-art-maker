window.onload = function(){

    
   let container = document.querySelector('#canvas')

    for(let i=0; i<400; i++){
        let box = document.createElement('span');

        box.addEventListener('click',function(){
            box.style.backgroundColor='red';
        })
        
    container.appendChild(box);
    }


   document.body.appendChild(container);
  }