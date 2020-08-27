    document.addEventListener('click', function(e){
        let path = e.path;     
        let uniqSelector=path[0].nodeName;
        let i=1;
        try {
            function check (){
                let tempSelector = path[i].nodeName;
                if (tempSelector != undefined){
                    uniqSelector=`${uniqSelector}/${tempSelector}`;                    
                    i++;
                    check();
                }
                }
               check();
               const arr = uniqSelector.split('/');
               uniqSelector='';
               
               for (let j=i-3;j>-1;j--){
                   uniqSelector=`${uniqSelector} ${arr[j]}`;
               }  
               console.log(document.querySelector(uniqSelector));
               console.log(document.querySelectorAll(`${uniqSelector}:first-child`));
        }catch(err){
            console.log('error');           
        }
        })