const $modal = document.getElementById('modal');
const $descriptionInput = document.getElementById('description');
const $priorityInput = document.getElementById('priority');
const $deadLineInput = document.getElementById('deadLine');
const $idInput = document.getElementById('idInput');

const $todoColumnBody = document.querySelector("#todoColumn .body");

const $creationModeTitle = document.getElementById('creationModeTitle');
const $editingModeTitle = document.getElementById('editingModeTitle');

const $creationModeButton = document.getElementById('creationModeButton');
const $editingModeButton = document.getElementById('editingModeButton');

var todolist = [];

function openModal(id) {
$modal.style.display = "flex";

if (id){

  $creationModeTitle.style.display = "none";
  $creationModeButton.style.display = "none";

  $editingModeTitle.style.display = "block";
  $editingModeButton.style.display = "block";

  const index = todolist.findIndex(function(task){
  return task.id === id;
  });

  const task = todolist[index];

  $idInput.value = task.id;
  $descriptionInput.value = task.description;
  $priorityInput.value = task.priority;
  $deadLineInput.value = task.deadLine;

 } else{
  $creationModeTitle.style.display = "block";
  $creationModeButton.style.display = "block";

  $editingModeTitle.style.display = "none";
  $editingModeButton.style.display = "none";

 }
}

function closeModal() {
$modal.style.display = "none";

$idInput.value = "";
$descriptionInput.value = "";
$priorityInput.value = "";
$deadLineInput.value = "";

}

function generateCards(){
const todoListHtml = todolist.map(function(task){
const formattedDate = moment(task.deadLine).format('DD/MM/YYYY');
return `
  <div class="card" ondblclick="openModal(${task.id})">
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
  id: Math.floor(Math.random() * 9999999),
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

function updateTask() {
  const Tasks = {
    id: $idInput.value,
      description: $descriptionInput.value,
      priority: $priorityInput.value,
      deadLine: $deadLineInput.value,
  };

  const index = todolist.findIndex(function(task){
    return task.id == $idInput.value;
    });

    todolist[index] = Tasks;
    
    closeModal();
    generateCards();
}