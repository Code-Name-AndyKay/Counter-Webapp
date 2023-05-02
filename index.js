
let count = 0;

const Counter = {

  add:function addCount(){
    count ++
    document.getElementById("ViewCount").textContent = count

    if (count > 99){
      window.alert('Maximum count 99')
      count = 99
      document.getElementById("ViewCount").textContent = count
  }
}
  ,
  

  subtract:function subCount(){
    
    count --
    document.getElementById("ViewCount").textContent = count
    
    if (count <= -1){
      count = 0
      document.getElementById("ViewCount").textContent = count
    } 
  },

  save:function saveCount(){
    // countArray.push(count)
    document.getElementById("saved-values").textContent += ` ${count} -`
  },

  reset:function resetCount(){
    count = 0
    document.getElementById("ViewCount").textContent = count
    document.getElementById("saved-values").textContent = ''
  },
}




