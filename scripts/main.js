

document.querySelector("#form").addEventListener("submit",store)
 let arr= JSON.parse(localStorage.getItem("user")) || [] ;

 function Submit(Name,Email,Address,Amount)
 {
  this.name=Name;
  this.email=Email;
  this.address=Address;
  this.wallet=Amount;
 }
 

 
 function store(){
    event.preventDefault();
    let form=document.querySelector("#form");

    let Name=form.Name.value;
    let Email=form.Email.value;
    let Address=form.Address.value;
    let Amount=form.Amount.value;

//    console.log(Name,Email,Address,Amount)
let sub= new Submit(Name,Email,Address,Amount)
// console.log(sub);
arr.push(sub);
console.log(arr);

localStorage.setItem("user",JSON.stringify(arr))
window.location.reload();
}