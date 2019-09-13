window.onload = function(){
  var currentColor = 'white'

   let container = document.querySelector('#canvas');

    for(let i=0; i<400; i++){
        let box = document.createElement('span');

        box.addEventListener('click',function(){
            box.style.backgroundColor = currentColor;
        })
        
    container.appendChild(box);
    }

   document.body.appendChild(container);
  
  let  selector = document.querySelector('#selector');

  let colorChoices= ['red','blue','green','yellow','pink'];

    for (let c=0; c<colorChoices.length; c++){
       let box = document.createElement('span');
        box.style.backgroundColor = colorChoices[c];
    
        selector.appendChild(box);

        box.addEventListener('click',function(event){
           // console.log(event.target.style)
            currentColor = event.target.style.backgroundColor;
            console.log(currentColor)
        })
    }
    document.body.appendChild(selector);
}