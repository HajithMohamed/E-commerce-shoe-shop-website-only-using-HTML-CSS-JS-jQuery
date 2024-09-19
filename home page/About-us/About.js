
  const button=document.querySelector("#see-more")

  button.addEventListener("click",()=>{
    const div=document.querySelector(".show-more")
    div.style.display="block"
    
  })
  const h1=document.querySelector("h1")
  h1.addEventListener("mouseover",function(){
        h1.style.textDecoration="underline"
    
  })
  h1.addEventListener("mouseleave",function(){
    h1.style.textDecoration="none"

})
  


  