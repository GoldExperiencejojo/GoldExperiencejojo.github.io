let myImage = document.querySelector('img');
let i = 0;
myImage.onclick = function() {
    
    if(i % 2 === 0) {
      myImage.setAttribute('src', 'images/jojo.jpg');
      i++;
    } else {
      myImage.setAttribute('src', 'images/jojo2.jpg');
      myImage.setAttribute('width', '400px');
      i++;
    }
}