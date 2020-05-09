// 1 2 3 
// 4 5 6 
// 7 8 9 

// or end gole is 

//3 by 3 means 3 array inside array - and that array's have 3 items

// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//Define size at here
var myArray1 = new Array(3);

//define 3 by 3
//created 3 space inside 3 array of array -1->3->3
for (i = 0; i < 3; i++){
    myArray1[i] = new Array(3)
}


var start = 1;

for (var i = 0; i < 3; i++)
{
    for (var j = 0; j < 3; j++)
    {
        myArray1[i][j] = start;
        start = start + 1;
    }
}

console.log(myArray1,'3 by 3');



// Create 2 by 3

let testArray = new Array(2);

for(i=0;i<2;i++){
    testArray[i]=new Array(3);
}

var counter = 1;
var insideI = 'I';
var insideJ = 'J';



for(i=0;i<2;i++){
    console.log('start------------');
    
    console.log(insideI);

    console.log('end------------');
    
    for(j=0;j<3;j++){
      
        console.log(insideJ);

        testArray[i][j] = counter;
        counter++
    }
}   

console.log(testArray);
