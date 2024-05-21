const modals = document.getElementsByClassName('modal');
console.log(modals)
const isOpen = false

for(let i = 0; i < modals.length; i++){
    modals[i].close()
}

function openModal(index) {
    modals[index].showModal();
}

function closeModal(index){
    modals[index].close();
}

function toggleModal(index){
    if(isOpen){
        closeModal(index);
    } else {
        openModal(index);
    }
}