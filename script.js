function addTask() {
    let taskInput = document.getElementById('task');
    let taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please Enter Something :)');
        return; 
    }
    
let li = document.createElement('li');

let taskElement = document.createElement('span');
taskElement.classList.add('task-text');
taskElement.textContent = taskText;
    
let completeButton = document.createElement('button');
completeButton.textContent = '✅';
completeButton.onclick = function () {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
        sparkleEffect();
    }
};
        
let editButton = document.createElement('button');
editButton.textContent = '✏️';
editButton.onclick = function () {
    let input = document.createElement('input');
    input.value = taskElement.textContent;
    taskElement.replaceWith(input);
    input.focus();
        
    input.onblur = function () {
    taskElement.textContent = input.value.trim() || taskElement.textContent; 
    input.replaceWith(taskElement);
};
        
    input.onkeydown = function (e) {
       if (e.key === 'Enter') {
          taskElement.textContent = input.value.trim() || span.textContent;
          input.replaceWith(taskElement);
       }
    };
};
        
let deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
deleteButton.onclick = function() {
    li.remove();
}; 
    
let buttonContainer = document.createElement('div');
buttonContainer.classList.add('todo-buttons'); 
buttonContainer.appendChild(completeButton);
buttonContainer.appendChild(editButton);
buttonContainer.appendChild(deleteButton);

li.appendChild(taskElement);
li.appendChild(buttonContainer);
document.getElementById('todoList').appendChild(li);
taskInput.value = '';
    
li.style.animation = 'pop 0.5s ease-out forwards';
}
    
function enterKey(event) {
   if(event.key == 'Enter') {
      addTask();
    }
}

function sparkleEffect() {
    let sparkle = document.createElement('img'); // Create img element
    sparkle.src = '2yqT.gif';
    sparkle.className = 'sparkle'; 
    document.body.appendChild(sparkle); 
    setTimeout(() => {
        sparkle.remove();                               
    }, 5000); 
               
}

function birdPopUp() {
    let popup = document.createElement('div'); 
    popup.className = 'popup'; 
    popup.innerHTML = "Cuckoo says... Keep Going Superstar 🌟💕";
    
    document.body.appendChild(popup);
    
    popup.style.display = 'block';
    
    setTimeout(() => {
        popup.remove();
    }, 4000);
}
    
