// linked list, doubly linked list
//  stack linear datastructure insertion at the end and removal of element from the end  (LIFO) Last in first out 


// arr.push()  //insertion
// arr.pop() // removal

// bracket balancing [, {, (


function isBalance(str){

    let stack =[];

    for(let i=0;i<str.length;i++){

        if(str[i]==='(' || str[i]==='[' || str[i]==='{'){
            stack.push(str[i]);
        }

        if(str[i]==='}'){
            if(stack[stack.length-1]==='{')
                stack.pop();
            else{
                return false;
            }
        }

        if(str[i]===']'){
            if(stack[stack.length-1]==='[')
                stack.pop();
            else{
                return false;
            }
        }


        if(str[i]===')'){
            if(stack[stack.length-1]==='(')
                stack.pop();
            else{
                return false;
            }
        }

    }

    return stack.length===0;

}


// console.log(isBalance("[{}({}[]())()(){}[]()]"));

// const LinkedList = require('../linked_list/list');

class Node{
    constructor(data){
        this.data=data;
        this
    }
}


class LinkedList {

    constructor(){
        this.head =null; // return top value of the stack
        this.size = 0;
        this.tail = null; 
    }

    pushBack(data){
        const node=  new Node(data);
        node.next = this.head;
        this.head = node;
        if(this.size===0){
            this.tail = node;
        }
        this.size++;
    }

    popBack(){
        if(!this.size){
            throw Error("Stack is empty")
        }
        let curr = this.head;
        this.head = this.head.next;
        this.size--;
        curr.next = null;
        return curr.data;
    }

}

class Stack{
    constructor(){
        this.list = new LinkedList();
    }

    push(val){
        // append at end;
        this.list.pushBack(val);
    }

    pop(){
        //  remove from end;
        return this.list.popBack()
    }

    getTop(){
        //return last element value;
        return this.list.head;
    }

    get getSize(){
        // return the size of the Stack;
        return this.list.size
    }

    isEmpty(){
        return this.list.size ===0;
    }
}

const st = new Stack();

st.push(10);
st.push(20);
st.push(30);
st.push(40);

// st.pop();  // last element remove and return it's value
// st.getTop();  // return the value of the top element of the stack

while(!st.isEmpty()){
    console.log( st.getSize," ====== ",st.pop());
}

console.log(st.getSize)