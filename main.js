var app = new Vue (
    {
        el: '#root',
        data: {
            todoList: [
                {
                    testo: 'comprare il pane',
                    done: false
                },
                {
                    testo:'comprare latte',
                    done: false
                },
                {
                    testo:'allenamento',
                    done: false
                }
            ],
            todoCompleted: []
        },
        methods: {
            removeTodoListElement(index){
                this.todoList.splice(index,1)
            },
            todoDone(index, element){
                
                this.todoList[index].done = true
                console.log(this.todoList[index].done)
                this.todoList.splice(index,1)
                this.todoCompleted.push(element)
                console.log(this.todoList);
                console.log(this.todoCompleted);
            },
            removeTodoCompletedElement(index){
                this.todoCompleted.splice(index,1)
            }
            


        },
    }
)