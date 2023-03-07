const texto= document.getElementById('texto');
const contador= document.getElementById('contador');
console.log('hola');
console.log(texto.value);
texto.addEventListener('input', function(e){
    const target= e.target;
    const longitudMax= target.getAttribute('maxlength');
    const longitudAct= target.value.lenght;
    contador.innerHTML=`${longitudAct}/${longitudMax}`;    
});

