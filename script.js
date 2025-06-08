  // importar todas as ações que serão usadas
    

    const form = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    function setError(index){ // (setError) chamar o erro caso seja false
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){ // (removeError) remover o erro caso seja true
        campos[index].style.border ='';
        spans[index].style.display = 'none';
    }

    function nameValidate(){ //validar o nome
        if(campos[0].value.length <3)
        {
            setError(0)
        }
        else
        {
            removeError(0)
        }
    }

    function sobrenomeValidate(){
        if(campos[1].value.length <3) // (length) verificar o comprimentos de caracteres no valor
        {
            setError(1)
        }
        else
        {
            removeError(1)
        }
    }

    function idadeValidate(){
        const idade = parseInt(campos[2].value, 10); // parseInt(..., 10) converte a string em número inteiro.

        if(isNaN(idade) || idade <18) //isNaN(idade) verifica se o valor inserido não é um número válido.
        {
            setError(2)
        }
        else
        {
            removeError(2)
        }

        // Limita manualmente a idade no input
        if (idade < 0) {
            campos[2].value = 0;
            setError(2);
        } else if (idade > 120) {
            campos[2].value = 120;
            setError(2);
        } else if (idade < 18) {
            setError(2);
        } else {
            removeError(2);
        }
    }
    

    