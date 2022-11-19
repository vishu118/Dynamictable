
var tbodyelm=document.getElementById('tablebody');
    var name1=document.getElementById("name1");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");

    function fun()
    {   
        if(phone.value == "" || name1.value == "" || email.value == ""){
            alert('hi');
            return;
          } 
   
    tbodyelm.innerHTML+=`<tr>
         <td>${name1.value}</td>
        <td>${email.value}</td>
        <td>${phone.value}</td>
    
       <td class="remove"><button>Remove</button></td>
       </tr>
      `;
     

    var row = document.querySelectorAll(".remove");
        for(var i=0; i<row.length; i++){
            row[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    
  name1.value="";
  email.value="";
  phone.value="";

  
}



