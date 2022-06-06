

// url= https://masai-vouchers-api.herokuapp.com/api/vouchers
let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

 let ram= async   () =>  {
    try{
    let res= await fetch(url);
        // console.log(res);
        let collect= await res.json();
        // console.log(collect);
        append(collect)
    }
    catch(err)
    {
        console.log(err);
    }


};
ram();
let append= (collect) =>{
    // console.log(collect)
    let contain=document.querySelector("#purchased_vouchers")

    collect.forEach( ({name}) => {
        // console.log(vouchers)
       let box= document.createElement("div")

        let img=document.createElement("img")
        // img.src=el.image;
        box.append(img);

        contain.append(box);

    })
};



