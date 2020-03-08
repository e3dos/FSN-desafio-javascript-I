// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
 
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

   alunosDaEscola.push(

        {
            nome: nome,
            notas: [],
            cursos: [],
            faltas: 0

        }

    );

    
    return "Aluno " + nome + " criado com sucesso!"

}

   
    function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    console.log("Listando Alunos...");
    console.log("===================================================");
    alunosDaEscola.forEach(element => {
        

        console.log("Aluno: " + element.nome);

        let notaStr = "Notas: ";
        for(let i = 0; i < element.notas.length; i++) {
            notaStr += element.notas[i] + ", ";
        }
        notaStr = notaStr.substr(0, notaStr.length-2);
        console.log(notaStr);

        let cursos = "Cursos cadastrados: ";
        for (const iterator of element.cursos) {
            cursos += iterator.nomeDoCurso;
            cursos += " (" + iterator.dataMatricula + ")";
            cursos += ", ";
        }
        cursos = cursos.substr(0, cursos.length-2);
        console.log(cursos);

        console.log("Numero de faltas: " + element.faltas);
        console.log("===================================================");

    });

    }

    function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
        let encontrou = false;
            for(const iterator of alunosDaEscola) {

        if(iterator.nome == nome) {
            console.log("Aluno " + nome + " encontrado!");
            encontrou = true;
            return iterator;
        }

        }

        if(!encontrou) { 
            console.log("Não foi encontrador nenhum aluno com nome " + nome);
            return null;
        }


   }

    function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    for(let i = 0; i < alunosDaEscola.length; i++) {

        if(alunosDaEscola[i].nome == aluno) {
            console.log("Aluno " + aluno + " encontrado!");
            console.log("Matriculando " + aluno + " no curso " + curso + "...");
            let data = new Date;
            alunosDaEscola[i].cursos.push({
                nomeDoCurso: curso,
                dataMatricula: data
            });
            console.log("Aluno matriculado com sucesso on " + data);
            return true;
        }
        
        }

        console.log("Não foi encontrador nenhum aluno com nome " + aluno);
        return false;


   }
    function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

   for(let i = 0; i < alunosDaEscola.length; i++) {

    if(alunosDaEscola[i].nome == aluno) {
        console.log("Aluno " + aluno + " encontrado!");

        if(alunosDaEscola[i].cursos.length>0) {

            console.log("Aplicando falta no aluno " + aluno + "...");  
            alunosDaEscola[i].faltas++; 
            console.log("Falta aplicada com sucesso! " + alunosDaEscola[i].faltas + " faltas.");
            return true;
        }
        else {
            console.log("Aluno não esta matriculado em um curso!");
            return false;
        }

        
    }
    
    }

    console.log("Não foi encontrador nenhum aluno com nome " + aluno);
    return false;

    }
    
    function aplicarNota(aluno, nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */

   for(let i = 0; i < alunosDaEscola.length; i++) {

    if(alunosDaEscola[i].nome == aluno) {
        console.log("Aluno " + aluno + " encontrado!");

        if(alunosDaEscola[i].cursos.length>0) {

            console.log("Adicionando nota ao aluno " + aluno + "...");  
            alunosDaEscola[i].notas.push(nota); 
            console.log("Nota " + nota + " adicionada com sucesso!");
            return true;
        }
        else {
            console.log("Aluno não esta matriculado em um curso!");
            return false;
        }

        
    }
    
    }

    console.log("Não foi encontrador nenhum aluno com nome " + aluno);
    return false;


   }
   
     function aprovarAluno(aluno){
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */

    for(let i = 0; i < alunosDaEscola.length; i++) {

        if(alunosDaEscola[i].nome == aluno) {
            console.log("Aluno " + aluno + " encontrado!");
    
            if(alunosDaEscola[i].cursos.length>0) {
    
                console.log("Aluno devidamente matriculado em um curso....OK"); 
            }
            else {
                console.log("Aluno não esta matriculado em um curso! Portanto não pode ser aprovado!");
                return false;
            }

            if(alunosDaEscola[i].faltas <= 3) {
    
                console.log("Aluno têm menos de 3 faltas....OK"); 
            }
            else {
                console.log("Aluno têm " + alunosDaEscola[i].faltas + " faltas, portanto não pode ser aprovado!");
                return false;
            }


            let media = 0;
            for(let j = 0; j < alunosDaEscola[i].notas.length; j++) {

                media+=alunosDaEscola[i].notas[j];

            }
            media = media/alunosDaEscola[i].notas.length;

            if(media >= 7) {
    
                console.log("Aluno têm media de notas " + media + "....OK"); 
            }
            else {
                console.log("Aluno têm media de notas " + media + " portanto não pode ser aprovado!");
                return false;
            }   
            
            console.log("Aluno aprovado com sucesso!");
            return true;
            
        }
        
        }
    
        console.log("Não foi encontrador nenhum aluno com nome " + aluno);
        return false;

     }