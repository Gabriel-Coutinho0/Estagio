export const validador = {
    estaVazio(texto) {
        return texto === null || texto.trim() === ""
    },
    validarSelect(select) {
        return select === null || select === ""
    },
    formatarData(data) {
        const partes = data.split("-");
        console.log(data);
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];

        return `${dia}/${mes}/${ano}`;
    }

}