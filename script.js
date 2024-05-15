const modal = document.getElementsByClassName('modal')[0];
console.log(modal)
const isOpen = false
modal.close()

function openModal() {
    modal.showModal();
}

function closeModal(){
    modal.close();
}

function toggleModal(){
    if(isOpen){
        closeModal();
    } else {
        openModal();
    }
}