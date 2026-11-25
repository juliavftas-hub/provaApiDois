// post

async function criar() { 

 const id = document.getElementById('id').value
 const cpf = document.getElementById('cpf').value
 const email = document.getElementById('email').value

 //realizar req pro back

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

// esse é um get
async function Buscartodos() {
 const response = await fetch ('http://localhost:3000/livro/cadastro')
 const data = await response.json()

 console.log(data)

 const lista = document.getElementById("listaUsuarios")
 lista.innerHTML = ""

    data.pessoa.forEach(pessoa => {
        const li = document.createElement("li")
        li.innerText = "ID " + pessoa.id + " CPF: " + pessoa.cpf + " email: " + pessoa.email
        lista.appendChild(li)
    })
}

//put

async function Alterar() {
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value

    const response = await fetch("http://localhost:3000/livro/cadastro/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf, email })
    })

    const data = await response.json()
    document.getElementById('resultado').innerText = data.message
}

// esse é delete
async function Deletar() {

    const id = document.getElementById('id').value // pega o id digitado

    // DELETE: o id vai na URL, sem body e sem Content-Type
    const response = await fetch(`http://localhost:3000/livro/cadastro/${id}`, {
        method: "DELETE"
    })

    const data = await response.json()
    document.getElementById('resultado').innerText = data.message
}
