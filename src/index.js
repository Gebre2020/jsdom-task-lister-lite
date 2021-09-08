document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // form and input values
  const form = document.getElementById('create-task-form')
  const ul = document.getElementById('tasks')

  // Form submit event
  form.addEventListener('submit', gettingInfo)

  let num = 0;
 
  function gettingInfo(e){
    e.preventDefault()
    const dropDown = document.getElementById('priority')
    const dropDownValue = dropDown.options[dropDown.selectedIndex].value
    console.log(dropDownValue)

    let task = document.getElementById('new-task-description').value

    ul.innerHTML += `<li id=${++num}>${task}<button class="btn">X</button></li>`
    const deleteBtns = document.getElementsByClassName('btn')
    const li = document.getElementById(`${num}`)

    form.reset()
    if(dropDownValue === "red"){
       li.style.color = "red"
       li.className = "1"
   }else if(dropDownValue === "yellow"){
     li.style.color = "yellow"
     li.className = "2"
   }else if(dropDownValue === "green"){
     li.style.color = "green"
     li.className = "3"
   }

    getToTask(deleteBtns)

    let liNew = ul.children;
    //debugger
    [].slice
    .call(liNew)
    .sort(function(a,b){
      return a.className - b.className;
    })
    .forEach(function(val){
      ul.append(val);
    })

    // delete event
    function getToTask(deleteBtns){
      for (btn of deleteBtns){
        btn.addEventListener("click", removeTask)
      }
     }
     
     function removeTask(e){
       e.target.parentElement.remove()
     }
     
    
  }
})

