//  a tree is called binary tree if each node pointing to maximum (zero, one, or two children )


const Queue = require("../stack/queue");

class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=null;
        this.right = null;
    }
}

let isFound=false;
let leafNodeCount=0;
class BinaryTree{

    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(data){

        const node = new Node(data);

        if(!this.root){
            this.root = node;
        }else{

            // we need to traverse the tree and find the node where we want to insert new node
            // level order traversal

            const queue = new Queue();

            queue.enQueue(this.root);

            while(!queue.isEmpty()){

                let temp = queue.deQueue();

                if(temp.left){
                    queue.enQueue(temp.left);
                }
                else{
                    temp.left = node;
                    return;
                }
                if(temp.right){
                    queue.enQueue(temp.right);
                }
                else{
                    temp.right = node;
                    return;
                }
            }
        }
    }


    inorderTraversal(root){

        if(!root){
            return;
        }
        this.inorderTraversal(root.left);
        console.log(root.data, " -> ");
        this.inorderTraversal(root.right);

    }

    preorderTraversal(root){

        if(!root){
            return;
        }
        console.log(root.data, " -> ");
        this.preorderTraversal(root.left);
        this.preorderTraversal(root.right);
    }

    postorderTraversal(root){

        if(!root){
            return;
        }
        this.postorderTraversal(root.left);
        this.postorderTraversal(root.right);
        console.log(root.data, " -> ");
    }

    postorderSearchingTraversal(root,val){

        if(!root){
            return;
        }
        this.postorderSearchingTraversal(root.left,val);
        this.postorderSearchingTraversal(root.right,val);
        if(root.data===val){
            console.log("element found",val);
            isFound=true;
        }
    }

    heightOfTree(root){
        if(!root){
            return 0;
        }

        let leftTree = this.heightOfTree(root.left);
        let rightTree = this.heightOfTree(root.right);

        return Math.max(leftTree,rightTree)+1;
    }

    totalLeafNode(root){
        if(!root){
            return;
        }

        if(root.left==null && root.right == null){
            leafNodeCount++;
        }
        this.totalLeafNode(root.left);
        this.totalLeafNode(root.right);
       
    }

}

const binaryTree = new BinaryTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(8);

// console.log(binaryTree.root)

// binaryTree.inorderTraversal(binaryTree.root);

// binaryTree.preorderTraversal(binaryTree.root);

// binaryTree.postorderSearchingTraversal(binaryTree.root,10,isFound);
// console.log(isFound,">>>")
binaryTree.totalLeafNode(binaryTree.root)
console.log(binaryTree.heightOfTree(binaryTree.root),leafNodeCount)
// inorder   (Left -> data -> right) Traversal
// preorder  ( data -> Left -> right) Traversal
// postorder  (  Left -> right -> data) Traversal
// level order