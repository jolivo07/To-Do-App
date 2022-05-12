document.getElementById("send").onclick = function () {

    function Person(name) {
         this.name = name;

    }
    var nameEnter = document.getElementById("name").value;


    newPerson = new Person(nameEnter)
    if (nameEnter.length == 0) {
        alert("ingrese todos los campos")
    } else {
        add();
    }


}
     id = 0;
    function additonId() {
        id++;
        return id;
    }

    var arrayObject = [];
    const add = () => {
        cont = arrayObject.length+1
        arrayObject.push(newPerson)
        document.getElementById("table").innerHTML += '<tr><td class="text-center">'+cont+' </td><td class="text-center" >' + newPerson.name +'</td><td class="text-end "><button type="button" onclick=deleted() class="btn btn-link text-danger"><i class="fa-solid  fa-trash"></i></button> </td> </tr> '
        console.log(arrayObject);
       
    }

    function deleted(){
        
        console.log(cont);
      
      
        
    }
    

   
    













