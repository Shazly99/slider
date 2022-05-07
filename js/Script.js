let sliderImage=Array.from(document.querySelectorAll('.slider-container img'))//Get slider itemes
let slideCount=sliderImage.length;//Get number of slider
let currentSlide=1  ;//set current slider
let slideNumber=document.getElementById('slide-number');//slide number element 
//previous and next button
let nextBtn =document.getElementById('next')
let prevBtn=document.getElementById('prev')


// create main UL  element
let createUl=document.createElement('ul') ;
//insert id in ul
createUl.setAttribute('id','ul-item')

//create list item based on slide coount 
for(let i=1;i<=slideCount;i++)
{
    //create li element =>  <li></li>
    let createLi=document.createElement('li');

    //create Attribute in li => <li data-item="i"></li>
    createLi.setAttribute('data-item',i)

    //set item content in li => <li data-item="i">i</li>
    createLi.appendChild(document.createTextNode(i))

    //Append items to the main UL list  => <ul>   <li data-item="i">i</li>   </ul>
    createUl.appendChild(createLi)
} 
document.getElementById('indicators').appendChild(createUl)
//get Ul
let ul=document.getElementById('ul-item')
//get ul in array
let ulArray=Array.from(document.querySelectorAll('#ul-item li'))//Get slider itemes
for(let i=0;i<ulArray.length;i++){
    ulArray[i].onclick=function(){
        currentSlide=this.getAttribute('data-item')
        checker()
    }
}

//Handel click on previous and next button
// nextBtn.onclick=next;
// prevBtn.onclick=prev;
//function next
nextBtn.onclick=function next() {
    if (nextBtn.classList.contains('disabled')) {
        
    }else{
        console.log(currentSlide++)
        checker()
    }
}
//function previous
prevBtn.onclick=function prev() {
    if (prevBtn.classList.contains('disabled')) {
        
    }else{
        console.log(currentSlide--)
        checker()
    }
}

function checker() {
    slideNumber.textContent="slide #"+currentSlide+' of '+slideCount
    removeActiveInAllClass()
    sliderImage[currentSlide-1 ].classList.add('active')
    ul.children[currentSlide-1].classList.add('active')
    
    if(currentSlide==1){
        prevBtn.classList.add('disabled')
    }else{
        prevBtn.classList.remove('disabled')
    }
    if (currentSlide==slideCount) {
        nextBtn.classList.add('disabled')
    }else{
        nextBtn.classList.remove('disabled')
    }
}
checker();

function removeActiveInAllClass() {
    sliderImage.forEach(function(img) {
        img.classList.remove('active')
    })
    ulArray.forEach(function(ul) {
        ul.classList.remove('active')
    })
}

