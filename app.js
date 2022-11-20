
    const tablebody=document.getElementById('tablebody');
    const Name = document.getElementById("name");
    const email=document.getElementById("email");
    const number=document.getElementById("number");
    const btn = document.getElementById('add');
    const errorEl = document.querySelector(".error");
    const successEl = document.querySelector(".success");
    const formEl = document.querySelector('form');



formEl.addEventListener('submit',(e)=>{ 
    e.preventDefault();
       if(number.value == "" || Name.value == "" || email.value == ""){
        errorEl.innerText = "Empty input field (s)";
                errorEl.classList.add("error");
                setTimeout(() => {
                errorEl.innerText = "";
                }, 2000);
                return;
         } 
  
   tablebody.innerHTML+=`<tr>
       <td>${Name.value}</td>
       <td>${email.value}</td>
       <td>${number.value}</td>
       <td class="remove"><button>Remove</button></td>
       </tr>`;
    

   var row = document.querySelectorAll(".remove");
       for(var i=0; i<row.length; i++){
          
           row[i].onclick = function(){ 
               this.parentNode.remove();
               successEl.innerText = "Item Deleted Successfully";
               successEl.classList.add("success");
               setTimeout(() => {
                   successEl.innerText = "";
               }, 2000);
          
            }

           
       }
       
   
 Name.value="";
 email.value="";
 number.value="";

 
})


// function createTable(e){
//     e.preventDefault();
//     const nameVal = nameEl.value;
//     const emailVal = emailEl.value;
//     const phoneVal = phoneEl.value;
//     if (nameVal == "" || emailVal == "" || phoneVal == "") {
//         errorEl.innerText = "Empty input field (s)";
//         errorEl.classList.add("error");
//         setTimeout(() => {
//             errorEl.innerText = "";
//         }, 1000);
//     }
    
//     if(nameVal && emailVal && phoneVal){
//         tbodyEl.innerHTML += `
//        <tr>
//        <td class="name-td">${nameVal}</td>
//        <td class="mail-td">${emailVal}</td>
//        <td class="num-td">${phoneVal}</td>
//        <td class="btn-td"><button class="delete-btn">Delete Row</button></td>
//        </tr>`
     
     
//        nameEl.value = "";
//        emailEl.value = "";
//        phoneEl.value = ""; 
//        //errorEl.style.display = "block"; 
//     }
// }

// formEl.addEventListener('submit', createTable);

// tableEl.addEventListener("click",(e)=>{
//     if(!e.target.classList.contains("delete-btn")){
//         return;
//     } 
//     const btn = e.target;
//     btn.closest('tr').remove();
//     successEl.innerText = "Item Deleted Successfully";
//     successEl.classList.add("success");
//     setTimeout(() => {
//         successEl.innerText = "";
//     }, 1000);
// })




