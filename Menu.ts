import leia from "readline-sync";
import { Colors } from './src/util/Colors';

export function main() {

    let opcao: number;

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
        opcao = leia.questionInt("");

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
    leia.prompt();
}

main();