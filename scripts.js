// value gathering
let tel = document.getElementById("telefone");
let cep = document.getElementById("cep");

// error treatment
    // CEP
    cep.addEventListener("input", function(){
        // remove anything but number
        let valor = this.value.replace(/\D/g, '');

        // limits 8 digits
        valor = valor.slice(0, 8);

        // apllies mask: 12345-678
        if(valor.length > 5){
            valor = valor.slice(0, 5) + '-' + valor.slice(5);
        }

        this.value = valor;
    })

    // phone
    tel.addEventListener("input", function(){
        // remove anything but numbers and limits its digits to 11
        let rl = tel.value.replace(/\D/g, '').substring(0, 11);

        // make the value an array
        let arr = rl.split('');

        // var that gets the formatted number
        formatNum = '';

        // formatting var with if
            if(arr.length > 0){
                formatNum += '(' + arr[0];
            }
            if(arr.length > 1){
                // Eu resolvi o problema de não poder apagar o último parêntese fazendo o seguinte:
                // Eu não conseguia apagar o parêntese diretamente, mas ele era excluído se eu apagasse o segundo digito do DDD
                // Então pensei: se o requisito de existência do segundo parêntese for o segundo digito
                // Só preciso fazer com que esse requisito seja o terceiro digito!
                // Assim, o parêntese só aparece se eu digitar o terceiro digito, e deixa de existir se eu apagar o mesmo!
                formatNum += arr.slice(1, 3).join(') ');
            }
            if(arr.length > 3){
                formatNum += arr.slice(3, 7).join('');
            }
            if(arr.length > 7){
                formatNum += '-' + arr.slice(7, 11).join('');
            }
        // sends it formatted to the field
        tel.value = formatNum;
    })