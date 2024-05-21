const modals = document.getElementsByClassName('modal');
let modals_dict = {}

console.log(modals)

for(let i = 0; i < modals.length; i++){
    modals_dict[modals[i]] = false;
    modals[i].close()
}

function openModal(index) {
    modals[index].showModal();
    modals_dict[modals[index]] = true;
}

function closeModal(index){
    modals[index].close();
    modals_dict[modals[index]] = false;
}

function toggleModal(index){
    if(modals_dict[modals[index]]){
        closeModal(index);
    } else {
        openModal(index);
    }
}