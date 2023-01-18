const input = document.getElementById("input");
const ul = document.getElementById("ul");
const buton = document.getElementById("btn");
let todos = [];

buton.addEventListener("click", () => {
  const inputText = input.value.trim();
  if (inputText == null || input.value == "") {
    alert("deger giriniz");
  } else {
      const clik = document.createElement("input");
      clik.className = "clik";
      clik.type = "checkbox";
      clik.name = "tmm";
    const li = document.createElement("li");
    li.className = "li";

    li.innerHTML = inputText;
    li.appendChild(clik);
    ul.appendChild(li);
    addtodolist(inputText);
  }

  function addtodolist(newTodo) {
    checkTodolist();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function checkTodolist() {
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  }
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    buton.click();
  }
});

delimg.addEventListener("click", () => {
  ul.child(li);
});
