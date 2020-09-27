const todolist = [];
let input = document.getElementById("input"),
    button = document.getElementById("add"),
    list = document.getElementById('list');

button.addEventListener('click', add);

function render(){
    list.innerHTML = "";
    for(let i = 0; i < todolist.length; i++){
        list.innerHTML += `<li>${todolist[i]} <button>✏️</button><button>❌</button></li>`
        // list.innerHTML += '<li>' + todolist[i] + '</li>'
    }
}

function add(){
    const val = input.value;
    todolist.push(val);
    render();
}

function edit(){

}

function remove(){

}