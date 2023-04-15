/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((obj,index,arr)=>{
    if(obj.profession == "developer"){
      console.log(arr[index]);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((obj,index,arr)=>{
    if(obj.profession == "developer"){
      console.log(arr[index]);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj ={
    id:4,name:"susan",age:"20",profession:"intern"
  }
  arr.push(obj);
  arr.forEach((obj,index,arr)=>{
  
      console.log(arr[index]);
    
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  let brr = [];
  for(let i = arr.length-1;i>=0;i--){
    if(arr[i].profession == "admin"){
    arr.pop();
    break;
    }
    brr.push(arr.pop());
  }
    while(brr.length!=0){
      arr.push(brr.pop());
    
  }

}

function concatenateArray() {
  //Write your code here, just console.log
  let array = [{
    id:5,name:"susan",age:"20",profession:"intern"
  },
  {
    id:6,name:"susan",age:"20",profession:"intern"
  },{
    id:7,name:"susan",age:"20",profession:"intern"
  }]

  for(let i = 0; i<array.length ; i++){
    arr.push(array.pop());
  }

  arr.forEach((obj)=>{
    console.log(obj);
  })
}
