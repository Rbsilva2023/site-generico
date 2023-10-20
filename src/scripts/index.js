function handleModal () {
    const button = document.querySelector("#showMessage")
    const buttonTwo = document.querySelector("#showMessage__two")
    const modalContainer = document.querySelector("#modal")

    button.addEventListener('click', function(){
        modalContainer.showModal()
    })
    buttonTwo.addEventListener('click', function(){
        modalContainer.showModal()
    })
}

function closeModal(){
    const closeButton = document.querySelector("#button-x")
    const modalContainer = document.querySelector("#modal")

    closeButton.addEventListener('click', function(){
        modalContainer.close()
    })
}

handleModal()
closeModal()



