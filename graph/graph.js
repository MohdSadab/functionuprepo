

const Queue = require('../stack/queue');

class Graph{

    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;

        // represent the whole graph
        this.adjList = new Map();
    }

    addVertex(v){
        // add vertex in graph
        this.adjList.set(v,[]);


    }

    addEdge(v,target){
        // this is adding edge from v to target v->target
        this.adjList.get(v).push(target);

        // this is adding edge from targte to v v<-target
        this.adjList.get(target).push(v);
    }

    printGraph(){

        const keys = this.adjList.keys();
        for(let key of keys){
            console.log(key,'->',this.adjList.get(key));
        }
    }

    bfs(vertex,visisted={}){

        const queue = new Queue();
        

        queue.enQueue(vertex);
        visisted[vertex]=true;

        while(!queue.isEmpty()){
            const elem = queue.deQueue();
            console.log(elem);

            const vertices = this.adjList.get(elem);

            for(let vertex of vertices){

                if(!visisted[vertex]){
                    queue.enQueue(vertex);
                    visisted[vertex]=true;
                }

            }

        }
    }

    bft(){
        let visited={};
        let disconnectedCount=0;
        for(let key of this.adjList.keys()){
            if(!visited[key]){
                disconnectedCount++;
                this.bfs(key,visited);
            }
        }

        console.log(disconnectedCount);
    }

    dfs(vertex,visited={}){

        visited[vertex]=true;
        console.log(vertex);

        for(let vert of this.adjList.get(vertex)){
            if(!visited[vert]){
                this.dfs(vert,visited);
            }
        }
    }
}


const graph = new Graph(7);

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addVertex('F');
graph.addVertex('G');


graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','E');
graph.addEdge('B','E');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('C','D');

// graph.printGraph();
graph.bfs('A');
console.log("+++++++++++++=====")
graph.dfs('A');