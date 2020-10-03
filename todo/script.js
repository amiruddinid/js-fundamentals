const todolist = [];
let input = document.getElementById("input"), //DOM
    button = document.getElementById("add"), //DOM
    list = document.getElementById('list'); //DOM

button.addEventListener('click', add); //DOM

function render(){
    list.innerHTML = "";
    for(let i = 0; i < todolist.length; i++){
        let text = todolist[i].complete ? `<s>${todolist[i].text}</s>` 
        : todolist[i].text
        list.innerHTML += 
        `<li> ${text} 
            <button onclick="todolist[${i}].onEdit(${i},event)">✏️</button>
            <button onclick="todolist[${i}].onRemove(${i})">❌</button>
            <button onclick="todolist[${i}].onComplete()">Complete</button>
        </li>
        ` //DOM
        // list.innerHTML += '<li>' + todolist[i] + '</li>'
    }
}

function add(){
    const val = input.value;
    const newTodo = {
        text:val,
        complete:false,
        onComplete:function(){
            this.complete = true;
            render();
        },
        onEdit:function(i, e){
            const el = `<input type="text" value="${this.text}" 
            onkeypress="todolist[${i}].onSave(event)">`
            e.target.parentNode.innerHTML = el;
        },
        onSave:function(e){
            if(e.which === 13){
                const val = e.target.value; //DOM
                this.text = val;
                render();
            }
        },
        onRemove:function(i){
            todolist.splice(i, 1);
            render();
        }
    };
    todolist.push(newTodo);
    render();
}
