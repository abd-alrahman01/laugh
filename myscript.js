/* Author: Abdulrahman Amin
   Date: 15/7/2021
   Mobile: 01225185096
   Email: abdoamin.web@gmail.com
*/
var home = document.getElementById("first");
var contact = document.getElementById("last");
var roll = 2230;

function change_nav(){
    if(window.innerWidth < 992){
        home.innerText = "الصفحة الرئيسية"
        contact.innerText = "اتصل بنا"
        home.setAttribute('href','index.html')
        contact.setAttribute('href','contact.html')
    }else{
        home.innerText = "اتصل بنا"
        contact.innerText = "الصفحة الرئيسية"
        contact.setAttribute('href','index.html')
        home.setAttribute('href','contact.html')
    }

    if(window.innerWidth < 992 && window.innerWidth > 767){
        roll = 2630;
    }else if(window.innerWidth < 767 && window.innerWidth > 512){
        roll = 2830;
    }else if(window.innerWidth < 512 && window.innerWidth > 500){
        roll = 3000;
    }else if(window.innerWidth < 500){
        roll = 3500;
    }
}
change_nav()
window.onresize = function(){
    change_nav()

}

var scroll = document.getElementById("arrow-up");
const counters = document.querySelectorAll('.counter');
const speed = 200;

window.onscroll = function(){

    if(window.pageYOffset >= roll){
        counters.forEach(counter => {
            const updatecount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                if(count < target){
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updatecount ,100)
                }else{
                    count.innerText = target;
                }
            }
            updatecount();
            
        })
    }
    
    if(window.pageYOffset <= 100){
        scroll.style.bottom = '-50px';
    }
    else{
        scroll.style.bottom = '10px';
    }
}
