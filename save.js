// canvas saving

// open save menu
var saveButton = document.querySelector(".save-button")
console.log(saveButton)

saveButton.addEventListener('click', function() {
    var saveBack = document.getElementById("save-backdrop")
    var saveMenu = document.getElementById("save-menu-container")
    var saveItems = document.getElementById("save-menu-items")

    saveMenu.className = "visible"
    saveBack.className = "visible"
    saveItems.className = "visible"
})
