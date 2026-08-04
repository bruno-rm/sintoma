// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const posts = [
  {
    id: 1,
    section: "Apresentação",
    title: "Apresentação",
    author: "scelerum caput",
    content: "teste",
    created_at: "2022-11-14",
  },
];

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

export { posts, users };


      // "<p>A ficção é uma escrita sem evidência. Pelo menos é assim que a encaro quando a experiencio, principalmente quando estou na parte ativa desse processo. Ao contrário dos anos em que escrevi a não ser diante de uma meia dúzia de livros abertos, tentando formular uma frase que não traísse sua razão de ser, para mim, escrever ficção é um davaneio dos dedos, um levar-se pela euforia do exprimível sem olhar para os lados.</p><p>Resta-me ainda compreender por que o depósito de expectativas reservado a um escritor é maior do que os de outras atividades. Se digo que começarei a tocar saxofone, dificilmente alguém tomará isso como um desafio tácito de me tornar o próximo Bird ou Coltrane. No entanto, aquele que se coloca na posição de escritor logo é atravessado por olhares desconfiados. Seria porque todos nós sabemos escrever, mas não sabemos escrever como imaginamos o que se espera disso, de modo que o escritor que sai da gaveta seria, além de um atrevido, a lembrança dessa frustração? Ou seria porque a escrita exige a leitura, ou melhor, a participação ativa (e às vezes desgastante) de um espectador? Não sei, sei apenas que escrevo como quem escova os dentes.</p><p>Assim, minha pretensão — a esperança dos orgulhosos? — é depositar aqui um texto por mês. O roteiro não me é inédito: as horas transbordam sobre os dias que se acumulam, e o urgente se transfigura no ressentimento que nos aflige na procrastinação percebida na hora errada. Este projeto se configura como a expectativa de um futuro que se coloca no passado para se ver melhor. Encaro-o como uma história que conto sobre o que quase terei feito. Mais do que tudo que abandonei, sou a soma do que ainda vou desistir.</p><p>(Talvez eu tenha um dente a mais no meu sorriso caso descubra que a sua leitura deslocou sem remorso a sua atenção.)</p>",


//  CREATE TABLE posts  (
//     id SERIAL PRIMARY KEY,
//     section VARCHAR(100) NOT NULL,
//     title VARCHAR(255) NOT NULL,
//     author VARCHAR(150) NOT NULL,
//     content TEXT NOT NULL,
//     image VARCHAR(150) NOT NULL ,
//     created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
// );