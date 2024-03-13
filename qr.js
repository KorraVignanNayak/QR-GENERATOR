let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    // console.log(input)
    let image=document.querySelector("img")
    let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${image.value}`
    image.src=qr
    console.log(image)
})