var btn = document.getElementById('btnNav');
        var content = document.getElementById('menuContent');
        console.log(content);
        
        btn.addEventListener('click', function(){
            content.classList.toggle('is-active');
        })