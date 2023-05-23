function buscaCEP(){
  const cep = document.querySelector("input[name=cep]")
  botao.addEventListener('click', ()=>{
    const value = cep.value.replace(/[^0-9]+/, '');
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
      .then( response => response.json())
      .then( json => {
              if( json.cep ) {
            document.querySelector('input[name=rua]').value = json.logradouro;
            document.querySelector('input[name=bairro]').value = json.bairro;
            document.querySelector('input[name=cidade]').value = json.localidade;
            document.querySelector('input[name=estado]').value = json.uf;
          }
      });
   });
  function apagaForm() {
    limpar.addEventListener('click', ()=>
      document.querySelector('form[name=form]').reset(),
  )
}
}

