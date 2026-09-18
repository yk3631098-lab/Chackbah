function cl(){
  var ele = document.getElementsByClassName("box")[0]
  
  ele.style.translate = "0 -220px"
  setTimeout(() => {
    ele.style.width = "300px"
  } , 600)
  
  setTimeout(() => {
    ele.style.height = "230px"
  } , 1200)
  
}