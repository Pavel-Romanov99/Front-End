function processData(input) {

    var result = [];
    result = eval(input);
    
    var num_counter = 0;
    var final = [];

    if(result !== undefined){

    for(var i = 0; i < result.length; i++){
        
        //count the numbers 
        if(typeof result[i] === "number"){
            num_counter++;
        }
        //if its a string reverse it 
        else if(typeof result[i] === "string"){
            final.push(result[i].split('').reverse().join('') )
        }
        //if its an array
        else if(Array.isArray(result[i])){
                let isNested = !!(result.find(Array.isArray))
                //if its a multidim arr
                if(isNested){
                    //flatten it
                    final.push(result[i].flat(Infinity))
                }
                //if its a one-dimentional arr
                //sort it
                else final.push(result[i].sort())

            }
            //if its an json object
        else if(typeof result[i] === "object"){
            
            let str = JSON.stringify(result[i]);
            if(str && str[0] === '{'){
                let sliced = str.slice(1, -1);
                var test = sliced.replace(/"/g, '');
                var res = test.replace(":", ": ");
                final.push(res)
            }
        }
        //if its a function
        else if(typeof result[i] === "function"){
            final.push(result[i](42))
        }
    }
}
    if(num_counter > 0){
        final.unshift(num_counter)
    }
    console.log(JSON.stringify(final))
} 

processData([1.2, 3.2, "123456789",  [["4"], 2, [3, 4]], function(a) { return a; }, { name: "Martin" }, 3, 4, 5, function(a) { return (a + 1)}]);
processData(["test", "world", "42", 1,2]);
processData([1,2,3,4]);
processData();