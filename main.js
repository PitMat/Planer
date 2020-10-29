const breakTask = document.getElementById('break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const sheludeContainer = document.querySelector('.shelude__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn=document.getElementById('btn__no');
const yesBtn=document.getElementById('btn__yes')


let selectedColor, active


taskContainer.addEventListener('click',selectTask);
sheludeContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTask);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click',closePopup);
yesBtn.addEventListener('click',deleteTask);







// Wybieranie

function selectTask(e) {
   resetTask();

    taskColor=e.target.style.backgroundColor;

    

    switch(e.target.id){
        case 'break':
            activeTask(breakTask,taskColor);
            icon= '<i class="fas fa-coffee"></i>'
            break
            case 'gym':
                activeTask(gymTask,taskColor);
                icon='<i class="fas fa-dumbbell"></i>'
                break
            case 'study':
                activeTask(studyTask,taskColor);
                icon='<i class="fas fa-graduation-cap"></i>'
                break
            case 'tv':
                activeTask(tvTask,taskColor);
                icon='<i class="fas fa-tv"></i>'
                break
            case 'friends':
                activeTask(friendsTask,taskColor);
                icon='<i class="fas fa-user-friends"></i>'
                break
            case 'work':
                activeTask(workTask,taskColor);
                icon='<i class="fas fa-briefcase"></i>'
                break

                
    }      


}

function setColors(e) {
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }
}

function activeTask(task,color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active=true;
        selectedColor = color;
        return selectedColor;
    }else{
        active=false;
    }
}







// Resetowanie

function resetTask(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className='task__name';
    })
}

// Usuwanie

function deleteTask(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor='white';
    })

    closePopup();
}

// popUp

function openPopup(){
    popUp.style.display = 'flex';
}


function closePopup(){
    popUp.style.display = 'none';
}