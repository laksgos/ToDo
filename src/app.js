function elementcreator2(attacher, elem, insidetext = "", classes, id = "", source = "", typ = "", placeholder = "") {

    const elementcreated = document.createElement(`${elem}`)
    if (Array.isArray(classes)) {
        for (let x = 0; x < classes.length; x++) {
            elementcreated.classList.add(`${classes[x]}`)
        }
    }
    if (!Array.isArray(classes) && classes) { elementcreated.classList.add(`${classes}`) }

    if (insidetext) { elementcreated.innerText = insidetext }


    if (elem == "img") {
        elementcreated.src = `${source}`
    }
    if (id) { elementcreated.id = `${id}` }
    if (typ) { elementcreated.type = `${typ}` }
    if (placeholder) { elementcreated.placeholder = `${placeholder}` }
    if (attacher) { attacher.appendChild(elementcreated) }

    return elementcreated;


}


//element selectors
projectsTitleInput = document.querySelector(".projects-title-input")
addProjectBtn = document.querySelector(".addProject-btn")



//event listeners 
addProjectBtn.addEventListener("click", projectAdder)

//global variables 
let allProjectNames = [];

function projectAdder(e) {
    e.preventDefault()
    console.log("hi")

    if (!allProjectNames.includes(projectsTitleInput.value)) {
        //project title creator 
        listDiv = document.querySelector(".projects-list")
        projectItem = elementcreator2(listDiv, "div", "", ["project-name"])
        elementcreator2(projectItem, "li", projectsTitleInput.value, ["project-name"])

        // project delete button creator
        deletebtn = elementcreator2(projectItem, "button", "", ["deleteProjectBtn", "btn"])
        deletebtn.innerHTML = '<i class="far fa-trash-alt"></i>'
        deletebtn.addEventListener("click", deleteProject)

        //Project title storage 
        allProjectNames.push(projectsTitleInput.value)
        console.log(allProjectNames)

        //input field clear
        projectsTitleInput.value = ""

    } else { alert("Project name exists. Please rename.") }
}
//project deleter
function deleteProject() {
    this.parentNode.remove()

}

//list item adder
let allListItems = [];

function projectAdder(e) {
    e.preventDefault()
    console.log("hi")

    if (!allProjectNames.includes(projectsTitleInput.value)) {
        //project title creator 
        listDiv = document.querySelector(".projects-list")
        projectItem = elementcreator2(listDiv, "div", "", ["project-name"])
        elementcreator2(projectItem, "li", projectsTitleInput.value, ["project-name"])

        // project delete button creator
        deletebtn = elementcreator2(projectItem, "button", "", ["deleteProjectBtn", "btn"])
        deletebtn.innerHTML = '<i class="far fa-trash-alt"></i>'
        deletebtn.addEventListener("click", deleteProject)

        //Project title storage 
        allProjectNames.push(projectsTitleInput.value)
        console.log(allProjectNames)

        //input field clear
        projectsTitleInput.value = ""

    } else { alert("Project name exists. Please rename.") }
}