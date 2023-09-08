import inquirer from "inquirer";
let cuntinue = true;
let todolistapp = [];
async function createtodo(aree) {
    while (cuntinue) {
        let todoanswere = await inquirer.prompt([{
                message: "please select an option",
                type: "list",
                name: "todolist",
                choices: ["add", "update", "view", "delete", "exit"]
            }, {
                message: "what do you want to add",
                type: "input",
                name: "addtodo",
                when(todoanswere) {
                    return todoanswere.todolist == "add";
                }
            }, {
                message: "what do you want to update",
                type: "list",
                choices: todolistapp.map(item => item),
                name: "addtodoupdateitem",
                when(todoanswere) {
                    return todoanswere.todolist == "update";
                }
            }, {
                message: "what do you want to delete",
                type: "list",
                choices: todolistapp.map(item => item),
                name: "deleteitem",
                when(todoanswere) {
                    return todoanswere.todolist == "delete";
                }
            }
        ]);
        if (todoanswere.todolist === "add") {
            todolistapp.push(todoanswere.addtodo);
        }
        else if (todoanswere.todolist === "update") {
            let answeretodo = await inquirer.prompt({
                message: "what do you want to add",
                type: "input",
                name: "addtodoupdate",
            });
            let newaree = todolistapp.filter(item => item !== todoanswere.addtodoupdateitem);
            todolistapp = [...newaree, answeretodo.addtodoupdate];
            console.log(todolistapp);
        }
        else if (todoanswere.todolist === "view") {
            console.log(todolistapp);
        }
        else if (todoanswere.todolist === "delete") {
            let newaree = todolistapp.filter(item => item !== todoanswere.deleteitem);
            todolistapp = [...newaree,];
            console.log(todolistapp);
        }
        else if (todoanswere.todolist === "exit") {
            console.log(`thamks for using todoapp`);
            cuntinue = false;
        }
    }
}
createtodo(todolistapp);
