const toggleBtn = document.querySelector(".toggle-btn")
const basicText = document.querySelector(".basic-text")
const proText = document.querySelector(".pro-text")
const masterText = document.querySelector(".master-text")

toggleBtn.addEventListener("click", () => {
    if(!toggleBtn.classList.contains("active")){
        toggleBtn.classList.add("active")
        basicText.innerHTML = 199.99
        proText.innerHTML = 249.99
        masterText.innerHTML = 399.99
    }else{
        toggleBtn.classList.remove("active")
        basicText.innerHTML = 19.99
        proText.innerHTML = 24.99
        masterText.innerHTML = 39.99 
    }
})