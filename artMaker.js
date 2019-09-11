window.onload = function(){
  let currentColor = 'white'

   let container = document.querySelector('#canvas');

    for(let i=0; i<400; i++){
        let box = document.createElement('span');

        box.addEventListener('click',function(){
            box.style.backgroundColor='red';
        })
        
    container.appendChild(box);
    }

   document.body.appendChild(container);
  
  let  selector = document.querySelector('#selector');

  let colorChoices= ['red','blue','green','yellow','pink'];

    for (let c=0; c<colorChoices.length; c++){
       let selectorBox = document.createElement('span');
        selectorBox.style.backgroundColor = colorChoices[c];
    }
   selector.appendChild(selectorBox);

}