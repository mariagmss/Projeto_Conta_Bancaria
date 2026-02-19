import { Colors } from './src/util/Colors';
import { Input } from "./src/util/Input";
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    console.log("\nTestes - Classe Conta Corrente");
    
    const cc1 = new ContaCorrente(1, 5678, "Bianca", 1, 200000.00, 2000.00);

    console.log("Sacar 100,00: ", cc1.sacar(100.00));
    console.log("Sacar 200000.00: ", cc1.sacar(200000.00));
    console.log("Sacar 0.00: ", cc1.sacar(0.00));

    console.log("Depositar 500.00: ");
    cc1.depositar(500.00);

    cc1.visualizar();

    console.log("\nTestes - Classe Conta Poupança");
    
    const cp1 = new ContaPoupanca(2, 1234, "Paula", 1, 2000.00, 12);

    cp1.visualizar();

    console.log("\nSacar 1000.00");
    console.log("\n", cp1.sacar(1000.00));

    console.log("\nSacar 2100.00");
    console.log("\n", cp1.sacar(2100.00));

    console.log("\nDepositar 500.00");
    cp1.depositar(500.00);

    cp1.visualizar();

    console.log("\n");

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