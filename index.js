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

let amostragemCarrousel = [
    {
        texto: "Linda Mansão em Condomínio Acapulco Guarujá para Locação, imperdível!",
        img: "img/casa-carrousel.png",
        index: 1,
    },
    {
        texto: "Linda Casa na praia em Ubatuba para Locação!",
        img: "img/casa3 1.png",
        index: 2,
    },
    {
        texto: "Linda casa na floresta para Locação, imperdível!",
        img: "img/casa8 1.png",
        index: 3,
    }
]

amostragemCarrousel.forEach(item => {
    let conteudoAmostragem = document.createElement("div")
    conteudoAmostragem.innerHTML = `
    <div class="texto-amostragem">
    <p>${item.texto}
        <hr>
    </p>
    </div>
    <img src="${item.img}" alt="casa-1">`
    conteudoAmostragem.id = `${item.index}`
    console.log(item.index)
    if (item.index == 1) {
        console.log("active")
        conteudoAmostragem.classList = "active"
    } if (item.index == 2 || item.index == 3) {
        conteudoAmostragem.classList = "inactive"
        console.log("inactive")
    }
    carrousel.appendChild(conteudoAmostragem)
})


let banner1 = document.getElementById("1")
let banner2 = document.getElementById("2")
let banner3 = document.getElementById("3")
let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")

let passagem = 1

function passaSlide() {
    if (passagem == 1) {
        banner1.classList = "active"
        banner2.classList = "inactive"
        banner3.classList = "inactive"
        span1.style.backgroundColor = "var(--secondary-color)"
        span2.style.backgroundColor = "grey"
        span3.style.backgroundColor = "grey"
        passagem++
    }
    else if (passagem == 2) {
        banner1.classList = "inactive"
        banner2.classList = "active"
        banner3.classList = "inactive"
        span1.style.backgroundColor = "grey"
        span2.style.backgroundColor = "var(--secondary-color)"
        span3.style.backgroundColor = "grey"
        passagem++
    }
    else if (passagem == 3) {
        banner1.classList = "inactive"
        banner2.classList = "inactive"
        banner3.classList = "active"
        span1.style.backgroundColor = "grey"
        span2.style.backgroundColor = "grey"
        span3.style.backgroundColor = "var(--secondary-color)"
        passagem = 1
    }
}


setInterval(passaSlide, 5000)

