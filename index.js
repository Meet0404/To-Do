let inputfield=document.getElementById('User-input-add');
inputfield.addEventListener("keypress",function submit(event){
    if(event.key === 'Enter'|| event.key === 'return'){
        event.preventDefault();
        document.getElementById("add").click();
    }
});

function AddEntry(){
    let ToAdd=document.getElementById('User-input-add');
    let ol=document.getElementById('addtolist');
    let li=document.createElement('li');
    li.setAttribute('id',ToAdd.value);
    li.appendChild(document.createTextNode(ToAdd.value));
    ol.appendChild(li);
    document.getElementById("User-input-add").value='';
}

function RemoveEntry(){
    let ToDelete=document.getElementById('User-input-delete');
    let ol=document.getElementById('addtolist');
    if(document.getElementById('ToDelete').value === ToDelete.value){
        ol.removeChild(li.getElementById(ToDelete.value));
    }
    document.getElementById("User-input").value='';
}