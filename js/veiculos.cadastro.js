const veiculos = [];

function obterDadosDoFormulario() {
    const marcaInput = document.querySelector("#marca");
    const anoInput = document.querySelector("#ano");
    const modeloInput = document.querySelector("#modelo");

    const dadosVeiculo = {
        marca: marcaInput.value,
        modelo: modeloInput.value,
        ano: anoInput.value,
    };

    return dadosVeiculo;
}

function salvarVeiculo() {
    const veiculo = obterDadosDoFormulario();
    const valido = validarCamposFormulario();

    if (valido) {
        salvarDadosLocalStorage(veiculo);
        limparCampos();
        window.location.href = "./veiculos.html";
    } else {
        console.log("Preencha todos os campos");
        alert("Preencha todos os campos");
    }
}

function validarCamposFormulario() {
    const veiculo = obterDadosDoFormulario();

    if (
        veiculo.marca !== "" &&
        veiculo.modelo !== "" && 
        veiculo.ano !== ""
    ) {
        return true;
    } else {
        return false;
    }
}

function obtemDadosLocalStorage() {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
}

function salvarDadosLocalStorage(veiculo) {
    const veiculos = obtemDadosLocalStorage();
    veiculos.push(veiculo);

    const veiculosLS = JSON.stringify(veiculos);

    localStorage.setItem("veiculos", veiculosLS);
}

function limparCampos() {
    const marcaInput = document.querySelector("#marca");
    const anoInput = document.querySelector("#ano");
    const modeloInput = document.querySelector("#modelo");

    marcaInput.value = "";
    anoInput.value = "";
    modeloInput.value = "";
}