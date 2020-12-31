
function processData(input) {
    //Enter your code here

    var input1 = input.toLowerCase();
    var freq = {};
    for (var i=0; i< input1.length;i++) {
        var character = input1.charAt(i);
        if(character !== ' '){
            if (freq[character]) {
                freq[character]++;
             } else {
                freq[character] = 1;
             }
        }   
    }

    let arr = [];

    Object.entries(freq).forEach(([key, value]) => arr.push(value));

    let unique = [...new Set(arr)];

    if(unique.length === 1){
        console.log("GOOD");
    }
    else if(unique.length === 2){
        var max_of_array = Math.max.apply(Math, arr);
        var min_of_array = Math.min.apply(Math, arr);

        var counter_min = 0;
        var counter_max = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === min_of_array){
                counter_min++;
            }
            if(arr[i] === max_of_array){
                counter_max++;
            }
        }

        if(max_of_array === min_of_array + 1 && counter_max === 1){
            console.log("BAD");
        }
        else if(min_of_array === 1 && counter_min === 1){
            console.log("BAD");
        }
        else console.log("UGLY");
    }
    else console.log("UGLY")
} 

processData("pavel");