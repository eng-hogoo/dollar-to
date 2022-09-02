
// //from 86/93 ==>three
let form=document.forms[0]
console.log(form)
let input = document.querySelectorAll("input")[0]
let text=document.getElementsByClassName("result")[0]


input.oninput=function(){
    input.setAttribute("min","0")

text .innerHTML=`{${input.value}} USD Dollar ={ ${(input.value*19.23).toFixed(2)} }Egyptian Pound`
}
// sytle
document.body.style.background="black"
input.style.background="#fff364"
input.style.outline="none"
input.style.border="2px solid brown"
input.style.borderRadius="19px"
input.style.padding="4px 9px"
input.style.marginBottom="20px"
input.style.color="brown"
input.style.fontWeight="bolder"
text.style.color="#f37023"
form.style.margin="50px 250px"
text.style.marginLeft="-16px"



