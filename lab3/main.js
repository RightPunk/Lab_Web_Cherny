document.querySelector('.btn').addEventListener('click', function(){
    for(let i = 0; i<document.querySelectorAll('.post').length; i++){
        if(i % 2!= 0){
            document.querySelectorAll('.post')[i].style.backgroundColor = 'green';
        }
    }    
});

