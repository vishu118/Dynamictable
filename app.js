
    const tablebody=document.getElementById('tablebody');
    const Name = document.getElementById("name");
    const email=document.getElementById("email");
    const number=document.getElementById("number");
    const btn = document.getElementById('add');



btn.onclick = ()=>{  
        if(number.value == "" || Name.value == "" || email.value == ""){
            alert('Enter some data');
            return;
          } 
   
    tablebody.innerHTML+=`<tr>
         <td>${Name.value}</td>
        <td>${email.value}</td>
        <td>${number.value}</td>
    
       <td class="remove"><button>Remove</button></td>
       </tr>
      `;
     

    var row = document.querySelectorAll(".remove");
        for(var i=0; i<row.length; i++){
           
            row[i].onclick = function(){ 
                this.parentNode.remove();
                
            }
            
        }
        
    
  Name.value="";
  email.value="";
  number.value="";

  
}




