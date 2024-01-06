script = document.getElementById("script")
preview = document.getElementById("preview")

function clearPreview(){
    while (preview.childElementCount){
        preview.removeChild(preview.lastChild)
    }
}

function runButton(){
    clearPreview()
    output = document.createElement("div")
    output.innerHTML = script.value
    preview.appendChild(output)
}