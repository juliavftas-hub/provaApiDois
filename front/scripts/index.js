async function criar() {

 const id = document.getElementById('id').value
 const cpf = document.getElementById('cpf').value
 const email = document.getElementById('email').value

 //realizar req pro bacck

 const response = await fetch(
    'http://localhost:3000/livro/cadastro',

    {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({id, cpf, email})
    }

)

 const data = await response.json()

 console.log(data.message) 
 const resultado = document.getElementById('resultado')
 resultado.innerText = data.message
}

async function Buscartodos() {
 const response = await fetch ('http://localhost:3000/livro')
 const data = await response.json()

 console.log(data)

 const lista = document.getElementById("listaUsuarios")
 lista.innerHTML = ""

    data.forEach(pessoa => {
        const li = document.createElement("li")
        li.innerText = "ID " + pessoa.id + " CPF: " + pessoa.cpf + " email: " + pessoa.email
        lista.appendChild(li)
    })
}


function Alterar() {

    alert ('oie')
}

function Deletar() {

    alert ('oie')
}