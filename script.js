    function addTask() {
        let taskInput = document.getElementById('task');
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please Enter Something :)');
            return; 
        }
    
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = taskText;
    
        let button = document.createElement('button');
        button.textContent = '✅';
        button.onclick = function () {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                sparkleEffect();
            }
        };   
    
        li.appendChild(span);
        li.appendChild(button);
        document.getElementById('todoList').appendChild(li);
        taskInput.value = '';
    
        li.style.animation = 'pop 0.5s ease-out forwards';
    }
    

    function sparkleEffect() {
        
                let sparkle = document.createElement('img'); // Create img element
                sparkle.src = '2yqT.gif'; // Add your gif file name here
                sparkle.className = 'sparkle'; // Give it a class
                document.body.appendChild(sparkle); // Add it to the body
                
                setTimeout(() => {
                    sparkle.remove(); 
                }, 5000);        
    }
    
    
    
