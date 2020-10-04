let input = document.getElementById("input"), //DOM
    button = document.getElementById("add"), //DOM
    list = document.getElementById('list'); //DOM

const todoApp = {
    data:[],
    render: function(){
        list.innerHTML = "";
        for(let i = 0; i < this.data.length; i++){
            let text = this.data[i].complete ? `<s>${this.data[i].text}</s>` 
            : this.data[i].text
            list.innerHTML += 
            `<li> ${text} 
                <button onclick="todoApp.onEdit(${i}, event)">✏️</button>
                <button onclick="todoApp.onRemove(${i})">❌</button>
                <button onclick="todoApp.onComplete(${i})">Complete</button>
            </li>
            ` //DOM
            // list.innerHTML += '<li>' + todolist[i] + '</li>'
        }
    },
    add: function(){
        const val = input.value;
        const newTodo = {
            text:val,
            complete:false,
        };
        todoApp.data.push(newTodo);
        todoApp.render();
    },
    onEdit:function(i, e){
        const el = `<input type="text" value="${this.data[i].text}" 
        onkeypress="this.onSave(${i}, event)">`
        e.target.parentNode.innerHTML = el;
    },
    onSave:function(i, e){
        if(e.which === 13){
            const val = e.target.value; //DOM
            this.data[i].text = val;
            this.render();
        }
    },
    onRemove:function(i){
        this.data.splice(i, 1);
        this.render();
    },
    onComplete:function(i){
        this.data[i].complete = true;
        this.render();
    },
}

button.addEventListener('click', todoApp.add); //DOM
