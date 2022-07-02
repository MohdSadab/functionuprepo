// function getMaxValue(arr,k){
// let maxVal=[];
// let que=[];
// let i=0;
// let max=-Infinity;
// // while(i<k){
// //     while(que.length && que[len]<=arr[i]){
// //         let pop=que.pop();
// //         len =que.length-1;
// //     }
// //     i++;
// // }
// maxVal.push(max);
// for(i=k;i<arr.length;i++){
//     if(que.length===k)
//       que.shift();  //removing element from front  assume O(1)
//     let len = que.length-1;
//     while(que.length && que[len]<=arr[i]){
//         let pop=que.pop();
//         len =que.length-1;
//     }
//     que.push(arr[i]);
//     maxVal.push(que[0]);
// }

// return maxVal;
// }

// console.log(getMaxValue([1,3,5,-1,-3,5,3,6,7],3));


/**
From FnUr101Narendra kumar to Everyone 11:59 AM
/**
 * Here we have to find the longest consecutive substring
 */
//     word  ke repeatation handle nhi hua h
//!   ########     not  perfactly working  some fixing needed    ################# 
// let str = "hellothere"

// let res=[]
// function permutation(arr,index){

//     if(index===arr.length){
//         res.push([...arr]);
//         return;
//     }
//     const set = new Set();
//     for(let i=index;i<arr.length;i++){
//         [arr[i],arr[index]]=[arr[index],arr[i]];
//         permutation(arr,index+1);
//         [arr[index],arr[i]]=[arr[i],arr[index]];
//     }

// }

// permutation(['a','b','c'],0);

// console.log(res);

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */



 function wordFrequencies(words){
    let obj={};
    for(let word_idx=0;word_idx<words.length;word_idx++){
        if(obj[words[word_idx]]){
            obj[words[word_idx]]++;
           
        }else{
            obj[words[word_idx]]=1;
        }
    }
  return obj;  
}

function isAllWordsMatched(start,end,words){
    return end-start===(words.length-1)*words[0].length
}

var findSubstring = function(s, words) {
    
    let hash = wordFrequencies(words);
    let start=0,end=0;
    let wrd_start_idx=[];
    while(end<s.length+1){
        if(hash[s.substring(end,end+words[0].length)]){
            if(isAllWordsMatched(start,end,words)){
                wrd_start_idx.push(start);
            }
            hash[s.substring(end,end+words[0].length)]--;
            end=end+words[0].length;
           
        }else{
            while(start<end && !hash[s.substring(end,end+words[0].length)]){
                hash[s.substring(start,start+words[0].length)]++;
                start=start+words[0].length;
            }
            while(!hash[s.substring(end,end+words[0].length)] && end<=s.length){
                end++;
            }
        }
    }
   
    return wrd_start_idx
};

// console.log(findSubstring("barfoothefoobarman",["foo","bar"]))


function getTwoSumIndex(arr,target){

    let map = new Map();

    // for(let i=0;i<arr.length;i++){
    //     let b= target-arr[i];
    //     if(map.has(b)){
    //         return[map.get(b),i];
    //     }
    //     //  set after moving 
    //     map.set(arr[i],i);

    // }

    // return []

    for(let i=0;i<arr.length;i++){
        map.set(arr[i],i);
    }

    console.log(map)
    for(let i=0;i<arr.length;i++){
        let b= target-arr[i];
        if(map.has(b) && map.get(b)!==i){
            return[i,map.get(b)];
        }

    }
    
}

// let obj={
//     2:"gejs",
//     1:'kdkd',
//     0:'djdj'
// }

// console.log(obj);
console.log(getTwoSumIndex([2,7,11,15],4));


var lengthOfLongestSubstring = function(s) {
    let start=0, end=0, maxlength=0
    let set=new Set()
    
        for(end=0;end<s.length;end++){
            while(set.has(s[end])){
                  set.delete(s[start])
                  start=start+1
        }
      set.add(s[end])
      maxlength =Math.max(maxlength, end-start+1)
  }
    return maxlength;  
  };


/**
 * 
 * 
 * A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 */

class HashTable{

    constructor(size){
        this.ht=(new Array(size)).fill(0).map(curr=>[-1,-1]);
        this.size=0;
    }

    hashFunction(key){
        return key%this.ht.length;
    }

    insert(key,value){
        let ind= this.hashFunction(key);
        this.ht[ind][0]=key;
        this.ht[ind][1]=value;
        this.size=this.size+1;
    }

    getSize(){

        return this.size;
    }

    get(key){
        let val=this.ht[this.hashFunction(key)][1];
        if(val!==-1){
            return val
        }
    }

    delete(key){
        this.ht[this.hashFunction(key)][1]=-1;
        this.ht[this.hashFunction(key)][0]=[-1];
        this.size=Math.max(this.size-1,0);
    }


}
const ht = new HashTable(10);
ht.insert(5,1);
ht.insert(2,4);
ht.insert(3,8);
ht.insert(9,7);
console.log(ht.get(5))
