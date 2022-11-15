let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
function media(atletas){
  let nomes= atletas.map(function(atleta){
    return atleta.nome
  })
let notas= atletas.map(function(atleta){
return atleta.notas})
atletas[0].notas=atletas[0].notas.sort()
atletas[1].notas=atletas[1].notas.sort()
atletas[2].notas=atletas[2].notas.sort()
atletas[3].notas=atletas[3].notas.sort()
let notasValidas0= atletas[0].notas.slice(1,4)
let notasValidas1= atletas[1].notas.slice(1,4)
let notasValidas2= atletas[2].notas.slice(1,4)
let notasValidas3= atletas[3].notas.slice(1,4)
let media0= notasValidas0/notasValidas0.length
let media1= notasValidas1/notasValidas1.length
let media2= notasValidas2/notasValidas2.length
let media3= notasValidas0/notasValidas3.length
return `Atletas: ${nomes}
notas obtidas:
${atletas[0].notas}
${atletas[1].notas}
${atletas[2].notas}
${atletas[3].notas}
Média Válida:
${media0}
${media1}
${media2}
${media3}`