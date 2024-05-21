const modal = document.getElementsByClassName('modal')[0];
console.log(modal)
let isOpen = false
modal.close()

function openModal() {
    modal.showModal();
    isOpen = true;
}

function closeModal(){
    modal.close();
    isOpen = false;
}

function toggleModal(){
    if(isOpen){
        closeModal();
    } else {
        openModal();
    }
}