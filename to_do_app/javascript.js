
function setLocalStorage(){
    localStorage.setItem('arrayObject', JSON.stringify(arrayObject))
}

 getLocalStore = JSON.parse(localStorage.getItem('arrayObject'))

console.log(getLocalStore);


var cont= null
document.getElementById("send").onclick = function () {
    function Person( id, firstnName,lastName, dateBirth, addres, city, state, country ) {
        this.id = id; 
        this.name = firstnName;
        this.lastName=lastName;
        this.dateBirth=dateBirth;
        this.addres = addres;
        this.city=city;
        this.state=state;
        this.country=country;
    }
    var nameEnter = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var dateBirth = document.getElementById("dateBirth").value;
    var addres = document.getElementById("addres").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    newPerson = new Person( uuidv4(), nameEnter,lastName,dateBirth,addres,city,state,country );
    if (nameEnter.length == 0 || lastName.length == 0 ||dateBirth.length == 0 ||addres.length == 0 ||city.length == 0 ||state.length == 0 ||city.length == 0 )  {
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
            '<tr><td id="padre" class="text-center d-none">'+ newPerson.id+'</td><td class="text-center">' + newPerson.name +'</td><td class="text-center">' + newPerson.lastName +'</td><td class="text-center">' + newPerson.dateBirth +'</td><td class="text-center">' + newPerson.addres +'</td><td class="text-center">' + newPerson.city +'</td><td class="text-center">' + newPerson.state +'</td><td class="text-center" >' + newPerson.country +'</td><td class="text-center"><button type="button" onclick=edit(this) class="btn btn-link text-warning"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick=deleted() class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr> '        
             document.getElementById("name").value="";
             document.getElementById("lastName").value="";
             document.getElementById("dateBirth").value="";
             document.getElementById("addres").value="";
             document.getElementById("city").value="";
             document.getElementById("state").value="";
             document.getElementById("country").value="";
             cont=null
             console.log(arrayObject);
             setLocalStorage()
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
         let pr = `${event.target.parentNode.parentNode.parentNode.firstChild.innerHTML}`;
         namePerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling;
         lastNamePerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling;
         dateBiirthPerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling;
         addresPerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
         cityPerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
         statePerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
         countreyPerson = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
         
         
         
         
         find= arrayObject.find(x=>x.id===pr);
         document.getElementById("name").value = find.name
         document.getElementById("lastName").value = find.lastName
         document.getElementById("dateBirth").value = find.dateBirth
         document.getElementById("addres").value = find.addres
         document.getElementById("city").value = find.city
         document.getElementById("state").value = find.state
         document.getElementById("country").value = find.country
         console.log(find);
         cont = 0;
    }   

    function updated(){
        cont=null
        find.name= document.getElementById("name").value 
        find.lastName = document.getElementById("lastName").value
        find.dateBirth = document.getElementById("dateBirth").value
        find.addres = document.getElementById("addres").value
        find.city = document.getElementById("city").value
        find.state = document.getElementById("state").value
        find.country = document.getElementById("country").value
        namePerson.innerHTML=document.getElementById("name").value
        lastNamePerson.innerHTML=document.getElementById("lastName").value
        dateBiirthPerson.innerHTML=document.getElementById("dateBirth").value
        addresPerson.innerHTML=document.getElementById("addres").value
        cityPerson.innerHTML=document.getElementById("city").value
        statePerson.innerHTML=document.getElementById("state").value
        countreyPerson.innerHTML=document.getElementById("country").value



        document.getElementById("name").value="";
        document.getElementById("lastName").value="";
        document.getElementById("dateBirth").value="";
        document.getElementById("addres").value="";
        document.getElementById("city").value="";
        document.getElementById("state").value="";
        document.getElementById("country").value="";
     
    }


    function randomm(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }



   

   
   
  