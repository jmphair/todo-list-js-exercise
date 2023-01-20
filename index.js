function newTask(title, description) {
  const task = {

    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    logTaskDesc: function() {
      console.log(`${this.title}: ${this.description}`)
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;

}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log('---------------------------------------')

task2.logTaskDesc(); // Just For fun to see if it works how I think
task2.logState(); // NOT Completed
task2.markCompleted(); // Has to run to then print the below function
task2.logState(); // Completed

console.log('---------------------------------------')

task1.logTaskDesc(); // Just For fun to see if it works how I think
task1.logState(); // NOT Completed
task1.markCompleted(); // Has to run to then print the below function
task1.logState(); // Completed

console.log('---------------------------------------')
