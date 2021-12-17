'use strict';

const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsShowModal= document.querySelectorAll('.show-modal');
console.log(btnsShowModal);


const closeModal =function(){
    console.log('clicked');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

const openModal =function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// for when the button is clicked on
for (let i=0; i<btnsShowModal.length; i++){
    (btnsShowModal[i].addEventListener('click',function(){
        console.log('button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }));
}

// for when the close sign on the button is clicked on
btnCloseModal.addEventListener('click',function(){
    console.log('close clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});



// for when the overlay is clicked on
overlay.addEventListener('click',function(){
    console.log('clicked');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');


    // for DRY code writing 'when the btnCloseModal is clicked closeModal, when the overlay is clicked closeModal
   // const closeModal =function(){
     //   console.log('clicked');
       // overlay.classList.add('hidden');

       // };
       // btnCloseModal.addEventListener('click',closeModal)
           // overlay.addEventListener('click',closeModal)
});

//for when the esc is clicked on
document.addEventListener('keydown', function(e){
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();

    }


});
