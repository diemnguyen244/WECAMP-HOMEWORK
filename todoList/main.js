const ulTodo = document.getElementById("todo-ul");
const addBtn = document.getElementById("addBtn");
const myInput = document.getElementById("myInput");
const todoTemplate = document.querySelector("template");

//add todo li
addBtn.addEventListener("click", () => {
  if (myInput.value !== "") {
    const litemplate = todoTemplate.content.firstElementChild.cloneNode(true);
    ulTodo.appendChild(litemplate);
    litemplate.querySelector("p").textContent = myInput.value;
    myInput.value = "";
    removeTask();
    moveLitodoToDone();
    moveLitodoToPrior();
  }
});

//remove item
const removeTask = function () {
  let liTodos = ulTodo.querySelectorAll(".todo-li");

  for (const todo of liTodos) {
    const removeBtn = todo.querySelector(".remove");
    removeBtn.addEventListener(
      "click",
      () => {
        todo.remove();
      },
      false
    );
  }
};
removeTask();

//find Id - find button -click-add function style color
const moveLitodoToPrior = function () {
  const liTodos = ulTodo.querySelectorAll(".todo-li");

  const ulPri = document.querySelector(".priorityUl");

  for (const todo of liTodos) {
    const PriBtns = todo.querySelector(".star");

    PriBtns.addEventListener("click", () => {
      el = document.createElement("li");
      el.innerHTML = "mfkdslmf";
      ulPri.appendChild(todo);
      // todo.remove();
    });
  }
};
moveLitodoToPrior();
const changeColor = function () {
  const liTodos = ulTodo.querySelectorAll(".todo-li");
  for (const todo of liTodos) {
    const starBtn = todo.querySelector(".star");
    if (starBtn)
      starBtn.addEventListener(
        "click",
        () => {
          starBtn.style.backgroundColor = "purple";
          moveLitodoToPrior();
        },
        false
      );
  }
};
changeColor();

///move li to done
//find done button-> click-> remove li todo &&

//find ul done-> uldone append child li todo
const moveLitodoToDone = function () {
  let liTodos = ulTodo.querySelectorAll(".todo-li");

  const ulDone = document.getElementById("ulDone");

  for (const todo of liTodos) {
    const doneBtns = todo.querySelector(".done");

    doneBtns.addEventListener("click", () => {
      el = document.createElement("li");
      el.innerHTML = "mfkdslmf";
      ulDone.appendChild(todo);
      // todo.remove();
    });
  }
};

moveLitodoToDone();
