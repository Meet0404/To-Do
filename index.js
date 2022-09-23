let inputfield=document.getElementById('User-input-add');
inputfield.addEventListener("keypress",function submit(event){
    if(event.key === 'Enter'|| event.key === 'return'){
        event.preventDefault();
        document.getElementById("add").click();
    }
});

function AddEntry1(){
    let ToAdd=document.getElementById('User-input-add');
    let ol=document.getElementById('addtolist');
    let li=document.createElement('li');
    li.setAttribute('id',ToAdd.value); 
    li.appendChild(document.createTextNode(ToAdd.value));
    ol.appendChild(li);
    document.getElementById("User-input-add").value='';
}

function AddEntry(){
    let ToAdd=document.getElementById('User-input-add');
    let ol=document.getElementById('addtolist');
    //creates the new element in the DOM
    let li=document.createElement('li');
    //creates the new element in the DOM
    const div=document.createElement('div');
    //creates the new element in the DOM
    const span=document.createElement('div');
    //gives the new created div the id of "Dynamic DOM" so that we can edit the CSS of it.
    div.setAttribute('id','DynamicDOM');
    //sets the attribute for the button on the end of each newly created element upon entry
    span.setAttribute('class','close');
    span.innerHTML='&times;';
    //gives DIV the value obtained from the user as an input
    div.append(ToAdd.value,span);
    li.setAttribute('id',ToAdd.value);
    li.setAttribute('class','dynamicList') 
    li.setAttribute('ondblclick','myFunction()')
    li.appendChild(div);
    ol.appendChild(li);
    document.getElementById("User-input-add").value='';
    
}

function myFunction(){
    document.getElementById("DynamicDOM").style.textDecoration = 'strikethrough' ; 
}

function RemoveonClick(){
    let parent= document.getElementById('addtolist');
    let child = document.getElementById('DynamicDom');
}

//this removes the item from the list when the user clicks on the 'x' button 
//  document.getElementsByClassName('.close').addEventListener('click',function(){
//     console.log(this);
//  });
 //console.log(btn);
function Remove(){

}



///this function is used to remove the element from the list
function RemoveEntry(){
    let toRemove=document.getElementById('User-input-delete');
    
}
