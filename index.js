let carrousel = document.getElementById("carrousel")

let casas = [
    {
        nome: "Lagune Barra",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa7 1.png",
        preco: 5000,
        telefone: 34999426661,
    },
    {
        nome: "Mata N´ Ativa Pousada",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa8 1.png",
        preco: 7000,
        telefone: 34999426661,
    },
    {
        nome: "Mansão Ipanema",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa5 1.png",
        preco: 999,
        telefone: 34999426661,
    },
    {
        nome: "Mansão Lebron",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa6 1.png",
        preco: 1800,
        telefone: 34999426661,
    },
    {
        nome: "Mansão Central",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa4 1.png",
        preco: 1999,
        telefone: 34999426661,
    },
    {
        nome: "Mansão Bartho Leblon",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa3 1.png",
        preco: 900,
        telefone: 34999426661,
    },
    {
        nome: "Pousada Mar á Vista",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa2 1.png",
        preco: 900,
        telefone: 34999426661,
    },
    {
        nome: "Mansão Mar Azul",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa9 1.png",
        preco: 2000,
        telefone: 34999426661,
    },
    {
        nome: "Chácara do Sol",
        Endereco: "Rodovia Mário Tonoli, 290 | Santa Elisa | Itupeva / SP",
        img: "img/casa1 1.png",
        preco: 800,
        telefone: 34999426661,
    }
]

let listaCasas = document.getElementById("casas-lista")


casas.forEach(element => {
    let listaItem = document.createElement("li")
    listaItem.innerHTML = `<img src="${element.img}" alt="casa" class="fotos-casas">
    <div class="conteudo-casas">
        <h4>${element.nome}</h4>
        <h6>${element.Endereco}</h6>
        <p>A Partir de R$${element.preco} /Diária</p>
        <a class="fale-conosco" onclick="encaminhar('${element.telefone}', '${element.nome}')">Fale Conosco <img src="img/whatsapp 1.png" alt="whatsapp" ></a>
    </div>`
    listaItem.classList = "casas-lista-item"
    listaCasas.appendChild(listaItem)
})

function encaminhar(telefone, nome) {
    let mensagem = "Olá, Tenho Interesse em alugar a Casa"
    window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}: ${nome}`);
}