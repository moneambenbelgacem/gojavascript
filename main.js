let title = "coding", description ="this coding camp free", date= "25/10"
let card =` 
<div class ="card">
<h3> Hello ${title} </h3>
<p>${description} </p>
<span>${date}</span>
</div>`
document.write(card.repeat(4));