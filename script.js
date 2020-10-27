function send(){
    var value = document.getElementById("msg").value;
    var div = document.createElement("div");
    var textNode = document.createTextNode(value)
    div.appendChild(textNode)
    div.setAttribute("class","yourMsg")
    var msgArea = document.getElementById("msgArea")
    msgArea.appendChild(div)
    document.getElementById("msg").value = ""
    
    reply();
}

function reply(){
    var div = document.createElement("div");
    var textNode = document.createTextNode("Binod")
    div.appendChild(textNode)
    div.setAttribute("class","botMsg")
    var msgArea = document.getElementById("msgArea")
    msgArea.appendChild(div)
}
