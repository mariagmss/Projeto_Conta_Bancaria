import { Colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";

export function main() {

    let opcao: number;

    const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00);

    c1.visualizar();

    // teste oara método sacar
    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000.00: ", c1.sacar(200000.00));
    console.log("Sacar 0.00: ", c1.sacar(0.00));

    // teste para método depositar
    console.log("Depositar -10.00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500.00: ");
    c1.depositar(500.00);

    c1.visualizar();

    // console.log("O Titular da Conta é: ", c1.titular);
    // console.log("O Saldo da Conta é: ", c1.saldo);

    while (true) {
      console.log(Colors.fg.magentastrong,"┌─────────────────────────────────────────────────────────┐");
        console.log(" │                 BANCO DO BRAZIL COM Z                   │");
        console.log(" │                                                         │");
        console.log(" │         [ 1 ] - Criar conta                             │");
        console.log(" │         [ 2 ] - Listar todas as contas                  │");
        console.log(" │         [ 3 ] - Buscar contas por número                │");
        console.log(" │         [ 4 ] - Atualizar dados da conta                │");
        console.log(" │         [ 5 ] - Apagar conta                            │");
        console.log(" │         [ 6 ] - Sacar                                   │");
        console.log(" │         [ 7 ] - Depositar                               │");
        console.log(" │         [ 8 ] - Transferir valor da conta               │");
        console.log(" │         [ 0 ] - Sair                                    │");
        console.log(" │                                                         │");
        console.log(" └─────────────────────────────────────────────────────────┘", Colors.reset);

        console.log("Digite o número da opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.magentastrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.magentastrong, "\n\nCriar Conta\n\n", Colors.reset);
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.magentastrong, "\n\nListar todas as Contas\n\n", Colors.reset);
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.magentastrong, "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.magentastrong, "\n\nAtualizar dados da Conta\n\n", Colors.reset);
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.magentastrong, "\n\nApagar uma Conta\n\n", Colors.reset);
                keyPress()
                break;
            case 6:
                console.log(Colors.fg.magentastrong, "\n\nSaque\n\n", Colors.reset);
                keyPress()
                break;
            case 7:
                console.log(Colors.fg.magentastrong, "\n\nDepósito\n\n", Colors.reset);
                keyPress()
                break;
            case 8:
                console.log(Colors.fg.magentastrong, "\n\nTransferência entre Contas\n\n", Colors.reset);
                keyPress()
                break;
            default:
                console.log(Colors.fg.red, "\nOpção Inválida!\n", Colors.reset);
                keyPress()
        }
    }

}

function sobre(): void {
console.log(Colors.fg.magentastrong,"┌───────────────────────────────────────────────────────┐");
        console.log(" │                                                       │");
        console.log(" │   Projeto Desenvolvido por:                           │");
        console.log(" │   Maria Eduarda Gomes - mariaeduardao.gms@gmail.com   │");
        console.log(" │   GitHub - https://github.com/mariagmss               │");
        console.log(" │                                                       │");
        console.log(" └───────────────────────────────────────────────────────┘", Colors.reset);

}

/* essa função serve para pausar a mudança de uma opção para outra*/
function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();