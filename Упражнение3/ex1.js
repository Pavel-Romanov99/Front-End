
//1.1.=========================

function printArr(){
    let arr = [10, 5, 13, 18, 51]
    arr.forEach(element => {
        console.log(element);
    });
}

//1.2.=========================

function mult(num){
    return num * 2;
}

function mapArr(){
    let numbers = [10,5,13,18,51]
    let newArr = numbers.map(mult)
    
    newArr.forEach(element => {
        console.log(element)
    })
}


//1.3.=========================
function filterEven(){
    let arr = [2, 4, 121, 321, 12, 2]
    let filtered = []

    arr.forEach(element => {
        if(element % 2 == 0){
            filtered.push(element)
        }   
    });

    filtered.forEach(element => {
        console.log(element)
    });
}

//1.4.=========================
function lowerThan(){
    var arr = [2, 5, 13, 18, 4]
    var lower = false;

    arr.forEach(element => {
       if(element < 10) {
           lower = true;
           return
       }
    });
    console.log(lower)
}

//1.5 ========================
function devby3(){
   let arr = [10, 5, 13, 18, 51]
   var arr2 = []
   arr.forEach(element => {
      if(element % 3 == 0){
          arr2.push(element)
      } 
   });
 
   arr2.forEach(element => {
       console.log(element)
   });
}
//1.6 ========================
function accum(){
    let arr = [10, 5, 13, 18, 51]
    var reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(arr.reduce(reducer));
}

//1.7 ========================
function slice(){
    let arr = [10, 5, 13, 18, 51, 12, 321]
    let len = arr.length
    console.log(arr.slice(len - 2))
}
