function ToDoList() {
let teste = 0;
let tarefa = [];
let progresso = [];
const barra = document.getElementById("barraProgress")
const button = document.getElementById("todobutton")


button.addEventListener("click", (e) => {
    const muda = document.getElementById("todoput");
    if(muda.value !== "") {
      const listona = document.getElementById("pegar");
      listona.innerHTML += `<li class="tarefa">${muda.value}<span class="fecha">X</span></li>`
      muda.value = "";
      teste = [].slice.call(document.querySelectorAll(".fecha"));
      tarefa = [].slice.call(document.querySelectorAll(".tarefa"));
      barraProgresso();
    } else {
      alert("Insira algo no campo")
}  
for (let i in tarefa) {
  teste[i].addEventListener("click", (e) => {
    console.log(e.target)
        tarefa[i].remove()
        tarefa[i] = undefined;
        teste[i].remove()
        teste[i] = undefined;
        progresso = [].slice.call(document.querySelectorAll(".feito"))
        e.stopImmediatePropagation()
        barraProgresso();
        if (tarefa.every((e) => e === undefined)) {
          tarefa = [];
        }
      })

      tarefa[i].addEventListener("click", (e) => {
        console.log(i)
        if(tarefa.length === 1) i = 0;
      // tarefa[i].style.color = 'green';
      // teste[i].style.color = 'green';
      // tarefa[i].style.textDecorationLine = "line-through";
      // teste[i].style.textDecorationLine = "line-through";
      tarefa[i].classList.toggle("feito")
      progresso = [].slice.call(document.querySelectorAll(".feito"))
      e.stopImmediatePropagation()
      barraProgresso();
      })
    }
  }
)

const barraProgresso = () => {
  const retorno = tarefa.filter((e) => e !== undefined)
  const tamanhoProgresso = progresso.length/retorno.length * 100;
  if (tamanhoProgresso === undefined || isNaN(tamanhoProgresso) || tamanhoProgresso === Infinity) {
    barra.innerHTML = `0%`
    barra.style.width = `0%`
    barra.style.backgroundColor = "none"
  } else {
  barra.style.backgroundColor = "green"
  barra.style.width = `${tamanhoProgresso}%`
  barra.innerHTML = `${tamanhoProgresso.toFixed()}%`
}
}}

ToDoList();