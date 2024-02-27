const $modal = document.getElementById('modal');
const $descriptionInput = document.getElementById('description');
const $priorityInput = document.getElementById('priority');
const $deadLineInput = document.getElementById('deadLine');

const $todoColumnBody = document.querySelector("#todoColumn .body");

var todolist = [];

function openModal() {
$modal.style.display = "flex";
}

function closeModal() {
$modal.style.display = "none";
}

function generateCards(){
const todoListHtml = todolist.map(function(task){
const formattedDate = moment(task.deadLine).format('DD/MM/YYYY');
return `
  <div class="card">
    <div class="info">
     <b>Descrição: </b>
     <spam>${task.description}</spam> 
    </div>

    <div class="info">
     <b>Prioridade: </b>
     <spam>${task.priority}</spam> 
    </div>

    <div class="info">
     <b>Prazo:</b>
     <spam>${formattedDate}</spam> 
    </div>
  </div>
`;

});

$todoColumnBody.innerHTML = todoListHtml.join('');

}

function creatTasks() {
const newTasks = {
    description: $descriptionInput.value,
    priority: $priorityInput.value,
    deadLine: $deadLineInput.value,
};

if($descriptionInput.value == ""){
    alert('Por favor informe a Descrição');
    console.log($descriptionInput.value);
    return;
};

if($priorityInput.value == ""){
    alert('Por favor informe a Prioridade');
    console.log($priorityInput.value);
    return;
};

if($deadLineInput.value == ""){
    alert('Por favor informe a data');
    console.log($deadLineInput.value);
    return;
};

todolist.push(newTasks);

closeModal();
generateCards();

console.log(todolist);

}