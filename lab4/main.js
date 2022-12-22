document.querySelector('.btn').addEventListener('click', function(){
    for(let i = 0; i<document.querySelectorAll('.post').length; i++){
        if(i % 2!= 0){
            document.querySelectorAll('.post')[i].style.backgroundColor = 'green';
        }
    }    
})


document.querySelector('.catalog-sort').addEventListener('click', function(){
    for(let i = 0; i<document.querySelectorAll('.post').length; i++){
        if(i % 2!= 0){
            document.querySelectorAll('.post')[i].style.backgroundColor = 'transparent';
        }
    }
    let sorted = [...document.getElementsByClassName('post')].sort((a,b) =>{
        return a.children[2].innerHTML - b.children[2].innerHTML;
    });
    document.querySelector('.tabl').innerHTML='';
    for(let iteam of sorted){
        document.querySelector('.tabl').appendChild(iteam);
    }
});

