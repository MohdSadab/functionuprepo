
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{

    constructor(){
        this.firstNode=null;
        this.lastNode=null;
    }

    insertInFrontOfList(data){

        // node is created;
        // does not linked with any list
        const node = new Node(data);

        // if list is empty
        if(!this.firstNode){
            this.firstNode=node;
            this.lastNode = node;
        }
        else{
            const temp = this.firstNode;
            this.firstNode=node;
            node.next=temp;
        }

    }

    insertInLastOfList(data){
        const node = new Node(data);

        if(!this.firstNode){
            this.firstNode=node;
            this.lastNode = node;
        }else{
            this.lastNode.next = node;
            this.lastNode = node;
        }

    }

    printList(){
        let curr= this.firstNode;
        while(curr){
            console.log(curr.data);
            curr= curr.next;
        }
    }

    insertAfterKthPosition(data,k){

        let count=1;
        let curr = this.firstNode;
        while(curr && count!==k){
            curr=curr.next;
            count++;
        }
        if(!curr && count !==k){
            console.log("invalid position");
            throw Error("Invalid Position")
        }else if(!curr && count===k){
            this.insertInLastOfList(data);
        }else{
            const node = new Node(data);
            node.next = curr.next;
            curr.next=node;
        }
    }


    deleteFromFront(){
        if(!this.firstNode){
            throw Error("We can't delete from empty list");
        }

        let temp=this.firstNode;
        this.firstNode = this.firstNode.next;
        temp.next=null;
        if(!this.firstNode){
            this.lastNode=null;
        }
    }

    deleteFromLast(){
        let curr = this.firstNode;
        while(curr.next !==this.lastNode){
            curr=curr.next;
        }
        console.log(curr,this.lastNode);
        curr.next=null;
        this.lastNode = curr;

    }

    deleteFromKthPosition(k){
        let count=1;
        let curr = this.firstNode;
        if(k===1){
            this.deleteFromFront();
        }
        while(curr && count!==k-1){
            curr = curr.next;
            count++;
        }
        if(!curr){
            console.log("invalid position");
            throw Error("Invalid Position")
        }else{
           let targetNode = curr.next;
           curr.next = targetNode.next;
           targetNode.next = null

           //    if we remove last node
           if(!curr.next){
               this.lastNode=curr;
           }
        }

    }

    reverseList(){

        let curr = null;
        while(this.firstNode){
            if(!curr){
                this.lastNode = this.firstNode;
            }
            let nextNode = this.firstNode.next;
            this.firstNode.next = curr;
            curr = this.firstNode;
            this.firstNode = nextNode
        }
        this.firstNode  = curr;

    }

    loopStartNodeHasingTechnique(){
        let isLoopStarted = false;
        let set = new Set();

        let curr = this.firstNode;
        while(curr && !isLoopStarted){
            if(set.has(curr)){
                isLoopStarted=true;
            }else{
                set.add(curr);
                curr=curr.next;
            }
        }

       if(isLoopStarted){
           return curr;
       }
       return null;

    }

    loopDetectionWithSlowPtr(){
        let slowPtr=this.firstNode;
        let fastPtr= slowPtr;
        while(slowPtr && fastPtr && fastPtr.next){
            slowPtr =slowPtr.next;
            fastPtr = fastPtr.next.next;
            if(slowPtr === fastPtr){
                return true
            }
        }

        return false;
    }

}

const list = new LinkedList();
list.insertInFrontOfList(10);
list.insertInFrontOfList(9);
list.insertInFrontOfList(8);
list.insertInLastOfList(15);
list.insertInLastOfList(65);
list.insertInLastOfList(25);


console.log("===========")
// list.insertAfterKthPosition(3,6)
// list.printList();

// list.deleteFromFront();
// list.printList()

// list.deleteFromLast();
// list.printList()

// list.deleteFromKthPosition(3);
// list.reverseList()
// list.printList()

list.lastNode.next = list.firstNode.next.next.next;
list.insertInFrontOfList(1);
console.log(list.loopDetectionWithSlowPtr())

/**
what we have learned till now
insertionIn front 
insertion in middle
insertion in last
iteration over linked list

*/
/**
    insertion Singly List T.C.
    insertion in front = O(1)
    insertion in last = O(1)
    insertion in between = O(n)  // we need to traverse the list

    deletion T.C.
    deletion in front = O(1)
    deletion in last = O(n)
    deletion in between = O(n)  // we need to traverse the list

    
    array Insertion T.c.
    last O(1)
    middle O(n)
    front O(n)

    deletion in array T.C.

    last O(1)
    middle O(n)
    front O(n)


    insertion Doubly List T.C.
    insertion in front = O(1)
    insertion in last = O(1)
    insertion in between = O(n)  // we need to traverse the list

    deletion T.C.
    deletion in front = O(1)
    deletion in last = O(1)
    deletion in between = O(n)  // we need to traverse the list
 */


// ** ask interview detect loop in list 

module.exports = LinkedList