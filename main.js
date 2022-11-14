var app = new Vue (
    {
        el: '#root',
        data: {
            todoList: [
                {
                    testo: "I'm a task, complete or delete me",
                    done: false
                },
                {
                    testo: "I'm another task, complete or delete me",
                    done: false
                },
            ],

            todoCompleted: [],

            taskInputName:'',
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
            },
            addNewTask(){
                newTask = {
                    testo: this.taskInputName,
                    done: false
                }
                this.todoList.push(newTask)
                this.taskInputName = ''
            }
        },
    }
)