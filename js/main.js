fetch("../data/data.json").then
(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
 function displayData(info){
 	var body1=document.querySelector("body");
 	var row=document.createElement("section")
 	row.classList.add("row","justify-content-center");
 	body1.append(row)
 	info.Mobiles.map(value=>{
 		var col=document.createElement("article");
 		col.classList.add("col-sm-10","col-md-6","col-lg-3") ;
 		row.append(col)
        
        //card
 		var card=document.createElement("div");
 		card.classList.add("card","mt-3");
 		
 		//card body
 		var cardbody=document.createElement("div");
        cardbody.classList.add("card-body");

        //image
        var image=document.createElement("img");
        image.src=value.image;
        image.classList.add("img-responsive");
        image.alt=value.name;

        //Name
 		var name=document.createElement("h2");
 		name.textContent=value.name;
        name;
        name.classList.add("text-center","text-center");
        
        //oprice
        var oprice=document.createElement("p");
        oprice.classList.add("text-secondary","text-center");
        oprice.innerHTML="₹"+value.price+"/-";


        //price
        var price=document.createElement("p");
        price.classList.add("text-danger","text-center");
        price.innerHTML="<s>₹"+value.oprice + "/-</s>";
      
 		
        //buttonParent
        var buttonParent=document.createElement("div")
        buttonParent.classList.add("d-grid","gap-2");

       //button
       var button=document.createElement("button");
       button.classList.add("btn","btn-block","btn-primary");
       button.textContent="Add to Cart";
       buttonParent.append(button);
       
        
        cardbody.append(image)
        card.append(cardbody);
        col.append(card);
        cardbody.append(name)
        cardbody.append(price)
        cardbody.append(oprice)
        cardbody.append(buttonParent);
        

 	})
 }