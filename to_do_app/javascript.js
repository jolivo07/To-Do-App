import uuid from 'uuidv4'

var cont= null

document.getElementById("send").onclick = function () {
    function Person(name, id ) {
         this.name = name;
         this.id = id;

    }
    var nameEnter = document.getElementById("name").value;


    newPerson = new Person(nameEnter, randomm(1,9999999999999) ) 
    if (nameEnter.length == 0) {
        alert("ingrese todos los campos")
    } else {
        add();
    }
}

    var arrayObject = [];
    const add = () => {
            if(cont==null){
            arrayObject.push(newPerson)
            document.getElementById("tbody").innerHTML += 
            '<tr><td id="padre" class="text-center">'+newPerson.id+' </td><td class="text-center"  >' + newPerson.name +'</td><td class="text-end "> <button type="button" onclick=edit(this) class="btn btn-link text-warning"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick=deleted() class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr> '        
             document.getElementById("name").value="";
             cont=null
             console.log(arrayObject);
            }else{
                updated()
                console.log(arrayObject);
            }
         
           

    }
    function deleted(){

        event.target.parentNode.parentNode.parentNode.remove();
        pr= event.target.parentNode.parentNode.parentNode.firstChild.innerHTML;
        let find= arrayObject.find(x=>x.id == pr);        
        
        for (let index = 0; index < arrayObject.length; index++) {
            const element = arrayObject[index];

            if(element.id == find.id){
                arrayObject.splice(index,1)
            }
        }
        console.log(arrayObject);
    }

    function edit(){
         pr = event.target.parentNode.parentNode.parentNode.firstChild.innerHTML;
         namePerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling
         find= arrayObject.find(x=>x.id==pr);  
         document.getElementById("name").value = find.name
         console.log(find);
         cont = 0

         
    }   

    function updated(){
        cont=null
        find.name= document.getElementById("name").value 
        namePerson.innerHTML=document.getElementById("name").value
     
    }


    function randomm(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }


  
   
   
  /*  function UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxxx'.replace(/[x]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    console.log(UUID());
*/