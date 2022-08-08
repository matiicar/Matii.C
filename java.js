const nav = document.querySelector('.btn-wsp');
   window.addEventListener('scroll',function(){
        nav.classlist.toggle('active',window.scrolly> 0)
                                                          
   })