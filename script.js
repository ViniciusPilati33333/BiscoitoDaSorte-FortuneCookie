// variaveis
const screenOne = document.querySelector('.screen1 img') //criei uma variavel pra chamar(usando o querySelector) parte do codigo q eu qro

screenOne.addEventListener('click', function(phrasesOfCookie){ //adicionei um evento na funçao,de click, que executa uma outra funçao
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector(".screen2").classList.remove("hide");

})
let randomPhraser;
randomPhraser = Math.round(Math.random() * 7);

function phrasesOfCookie() {

    let phrase = '';

    switch (randomPhraser) {
        
        case 0:
            phrase = "Creia em si, mas não duvide sempre dos outros.";
        break
        case 1:
            phrase ='A vida trará coisas boas se tiver paciência';
            break;
        case 2:
            phrase ='Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'; 
            break;
        case 3:
            phrase ='Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?';
            break;
        case 4:
            phrase ="Espere pelo mais sábio dos conselhos: o tempo.";
            break;
        case 5:
            phrase ="O amor está mais próximo do que você imagina.";
            break
        case 6:
            phrase ="Você precisa fazer aquilo que pensa que não é capaz de fazer."; 
        case 7:
            phrase ="Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera.."; 
            break          
    }

    return phrase;
}

    document.querySelector(".screen2 p").innerText = phrasesOfCookie();







