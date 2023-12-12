const vendas = [];


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

function obterDadosDoFormulario() {
    const dataInput = document.querySelector("#data");
    const clienteInput = document.querySelector("#cliente");
    const veiculoInput = document.querySelector("#veiculo");
    const valorInput = document.querySelector("#valor");
    
    const dadosVenda = {
        data: dataInput.value,
        cliente: clienteInput.value,
        veiculo: veiculoInput.value,
        valor: valorInput.value,
    };
    
    return dadosVenda;
}

function salvarVenda() {
    const venda = obterDadosDoFormulario();
    const valido = validarCamposFormulario();
    
    if (valido) {
        salvarDadosLocalStorage(venda);
        limparCampos();
        window.location.href = "./vendas.html";
    } else {
        console.log("Preencha todos os campos");
        alert("Preencha todos os campos");
    }
}

function validarCamposFormulario() {
    const venda = obterDadosDoFormulario();
    
    if (
        venda.data !== "" &&
        venda.cliente !== "" && 
        venda.veiculo !== "" &&
        venda.valor !== ""
        ) {
            return true;
        } else {
            return false;
        }
}
    
function obtemDadosLocalStorage() {
    const vendas = localStorage.getItem("vendas");
    return JSON.parse(vendas) || [];
}
    
function salvarDadosLocalStorage(venda) {
    const vendas = obtemDadosLocalStorage();
    vendas.push(venda);
        
    const vendasLS = JSON.stringify(vendas);
        
    localStorage.setItem("vendas", vendasLS);
}
    
function limparCampos() {
    const dataInput = document.querySelector("#data");
    const clienteInput = document.querySelector("#cliente");
    const veiculoInput = document.querySelector("#veiculo");
    const valorInput = document.querySelector("#valor");
        
    dataInput.value = "";
    clienteInput.value = "";
    veiculoInput.value = "";
    valorInput.value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    loadClientes();
    loadVeiculos();
});
    
function loadClientes() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const clienteSelect = document.getElementById('cliente');
        
    clientes.forEach((cliente, indice) => {
        const option = document.createElement('option');
        option.value = cliente.nome;
        option.text = cliente.nome;
        clienteSelect.appendChild(option);
    });
}
    
function loadVeiculos() {
        const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        const veiculoSelect = document.getElementById('veiculo');

        veiculos.forEach((veiculo, indice) => {
        const option = document.createElement('option');
        option.value = veiculo.modelo;
        option.text = veiculo.modelo;
        veiculoSelect.appendChild(option);
    });
}

function registerPurchase() {
    const data = document.getElementById('data').value;
    const clienteId = document.getElementById('customer').value;
    const veiculoId = document.getElementById('veiculo').value;
    const valor = document.getElementById('valor').value;
}