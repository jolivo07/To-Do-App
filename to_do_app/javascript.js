document.getElementById("send").onclick = function () {

    function Person(name, id) {
         this.name = name;
         this.id = id;

    }
    var nameEnter = document.getElementById("name").value;


    newPerson = new Person(nameEnter, random(1,99))
    if (nameEnter.length == 0) {
        alert("ingrese todos los campos")
    } else {
        add();
    }


}

    var arrayObject = [];
    const add = () => {
        cont = arrayObject.length+1
        arrayObject.push(newPerson)
        document.getElementById("tbody").innerHTML += '<tr ><td id="padre" class="text-center">'+newPerson.id+' </td><td class="text-center" >' + newPerson.name +'</td><td class="text-end "><button type="button" onclick=deleted(this) class="btn btn-link text-danger"><i class="fa-solid  fa-trash"></i></button> </td> </tr> '
      
        
        
    }

    function deleted(){
        event.target.parentNode.parentNode.remove();
        pr= event.target.parentNode.parentNode.firstChild.innerHTML;
       let prueba= arrayObject.find(x=>x.id==pr);
        arrayObject.splice(prueba.id, 1)        
        console.log(arrayObject);
        for (let index = 0; index < arrayObject.length; index++) {
            const element = arrayObject[index];

            if(element.id == prueba.id){
                arrayObject.splice(index,1)
            }
            
        }
       

    }

  
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    
    
    
    function uid() {
         let a = new Uint8ClampedArray();
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
       };





       
   















