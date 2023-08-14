window.addEventListener('scroll',function(){
    let header = document.getElementById('header');
    if(this.window.scrollY >= 230){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});

function first(){
    document.getElementById('slide').src="/Images/top2.jpg";
}
function second(){
    document.getElementById('slide').src="/Images/top3.jpg";
}
function third(){
    document.getElementById('slide').src="/Images/top4.jpeg";
}
function fourth(){
    document.getElementById('slide').src="/Images/top1.png";
}
setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);
setInterval(fourth,8000);

var a = document.getElementsByClassName('courseCard')
a[0].addEventListener('click',function(){
    window.location.href="/signup.html";
})
a[1].addEventListener('click',function(){
    window.location.href="/signup.html";
})
a[2].addEventListener('click',function(){
    window.location.href="/signup.html";
})
a[3].addEventListener('click',function(){
    window.location.href="/signup.html";
})