const text = document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        text.addEventListener('input', function(){
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(nameRegex.test(text.value))
                textError.textContent = "";
            else textError.textContent = "please enter your name with caps";
        });

        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function(){
            output.textContent=salary.value;
        });
    
    
    
    
    
    
        
    
