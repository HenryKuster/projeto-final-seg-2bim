function obtemDadosLocalStorage() {
    const vendas = localStorage.getItem("vendas");
    return JSON.parse(vendas) || [];
}

function iniciar() {
    renderizarListagem();
}

function obtemClientesLocalStorage() {
    const clientes = localStorage.getItem("clientes");
    return JSON.parse(clientes) || [];
}

const clientes = obtemClientesLocalStorage

function obtemVeiculosLocalStorage() {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
}

const veiculos = obtemVeiculosLocalStorage

function renderizarListagem() {
    const vendas = obtemDadosLocalStorage();
    const listaEl = document.querySelector("#lista");

    vendas.forEach((ven, indice) => {
        const trEl = document.createElement("tr");
    
        const tdId = document.createElement("td");
        const tdData = document.createElement("td");
        const tdCliente = document.createElement("td");
        const tdVeiculo = document.createElement("td");
        const tdValor = document.createElement("td");

        tdId.innerHTML = indice + 1;
        tdData.innerHTML = ven.data;
        tdCliente.innerHTML = ven.cliente;
        tdVeiculo.innerHTML = ven.veiculo;
        tdValor.innerHTML = ven.valor;

        trEl.appendChild(tdId);
        trEl.appendChild(tdData);
        trEl.appendChild(tdCliente);
        trEl.appendChild(tdVeiculo);
        trEl.appendChild(tdValor);

        listaEl.appendChild(trEl);
    });
}