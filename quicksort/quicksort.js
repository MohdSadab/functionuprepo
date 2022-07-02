// recurison steps

//  if we have a single element or no element in the array to be sorted return; (already sorted)
// pick an element to serve as a pivot .( usually leftmost element as a pivot)
//  split the array into two parts  -all  elements on left side of pivot have less value as comparte to pivot all  elements on right side of pivot have greater value as comparte to pivot 
// recursively repeat the algorithm


function getCurrectPositionOfPivot(arr,left,right){

    // taking right most element as a pivot;
    let pivot = arr[right];

    let currectPositionForPivotSoFar= left-1; 

    // why righ-1 why not till right
    // reason because right most element is the pivot
    for(let curr=left;curr<=right-1;curr++){

        if(pivot>arr[curr]){
            currectPositionForPivotSoFar++;

            [
                arr[currectPositionForPivotSoFar],
                arr[curr]
            ]=[
                arr[curr],
                arr[currectPositionForPivotSoFar]
            ]
        }

    }

    // till currectPositionForPivotSoFar pivot value is greater because we increment currectPositionForPivotSoFar only when we found lesser value
    [
        arr[currectPositionForPivotSoFar+1],
        arr[right]
    ]=[
        arr[right],
        arr[currectPositionForPivotSoFar+1]
    ]


    return currectPositionForPivotSoFar+1;

}


function getCurrectPositionOfPivot2(arr,low,high){

    let left=low;
    let right=high;
    let pivot = arr[high];

    while(left<right){

        // this condition failed on 2 cases
        // 1 => left >=right
        // 2=> arr[left] > pivot (we need to send this right position)
        while(left<right && arr[left]<pivot){
            left++;
        }

         // this condition failed on 2 cases
        // 1 => left >=right
        // 2=> arr[right] <= pivot (we need to send this left position)
        while(left<right && arr[right]>=pivot){
            right--;
        }

        if(left<right){
           [arr[left],arr[right]]=[arr[right],arr[left]]; 
        }
    }

    [arr[left],arr[high]]=[arr[high],arr[left]];

    return left;

}



function quickSort(arr,left,right){

    if(left>=right){
        return;
    }

    let currPositionOfPivot = getCurrectPositionOfPivot2(arr,left,right);
    // left side of the pivot
    quickSort(arr,left,currPositionOfPivot-1);

    // right side of the pivot
    quickSort(arr,currPositionOfPivot+1,right);


}

const arr = [6,3,4,6,1,7,3,9,2,8];

// quickSort(arr,0,arr.length-1);

// console.log(arr);
// for (let val of arr){
//     console.log(val);
// }

let object={
    'key1':'adhd',
    'key2':'shdhd'
}

for (let val of Object.entries(object)){
    console.log(val);
}