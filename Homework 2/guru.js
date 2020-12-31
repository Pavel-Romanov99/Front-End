function ReverseString(str) { 
    return str.split('').reverse().join('') 
 }

function multiDimentional(str){
    let counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == '['){
            counter++;
        }
    }
    if(counter > 1){
        return true;
    }
    return false;
}

function processData(input) {

    var result = [];
    result = eval(input);

    let num_counter = 0;
    let final = [];

    for(var i = 0; i < result.length; i++){

        if(typeof result[i] === "number"){
            num_counter++;
        }
        else if(typeof result[i] === "string"){
            final.push(ReverseString(result[i]))
        }
        else if(typeof result[i] === "object"){
            let str = JSON.stringify(result[i]);

            if(str[0] == '['){                
                if(multiDimentional(str)){
                    final.push(result[i],flat())
                }
                else{
                    final.push(result[i].sort())
                }
            }
            else if(str[0] === '{'){
                let sliced = str.slice(1, -1);
                var test = sliced.replace(/"/g, ' ');
                final.push(test)
            }
        }
        else if(typeof result[i] === "function"){
            final.push(result[i](42))
        }
    }
    if(num_counter > 0){
        final.unshift(num_counter)
    }
    console.log(final)
} 

processData([1, "123456789", [1, 2, 5, 4], function(a) { return a; }, {"name": "Martin"}, 3, 4, 5, function(a) { return (a + 1)}]);