
    var bagbarcontainer = document.querySelector(".bagbar")
    


function openbagtap()
{
    bagbarcontainer.style.display="block"
}
function closebagbar()
{
    bagbarcontainer.style.display="none"

}

var fullhomepage = document.querySelector(".full-home-pagefor-order")
var showpriceofdeliver1 = document.querySelector(".price-1")
var showpriceofdeliver2 = document.querySelector(".price-4")
var showpriceofdeliver3 = document.querySelector(".price-3")



function opencheckoutpage()
{
    fullhomepage.style.display="none"
}

function show2()
{
    showpriceofdeliver1.style.display="block"
    showpriceofdeliver2.style.display="none"
    showpriceofdeliver3.style.display="none"
}
function show5()
{
    showpriceofdeliver1.style.display="none"
    showpriceofdeliver2.style.display="block"
    showpriceofdeliver3.style.display="none"
}
function show7()
{
    showpriceofdeliver1.style.display="none"
    showpriceofdeliver2.style.display="none"
    showpriceofdeliver3.style.display="block"
}


