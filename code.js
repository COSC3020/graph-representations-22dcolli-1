/*
function convertToAdjList(adjMatrix) {
    let adjList = []
    for(let i = 0; u < adjMatrix.length; i++)
    {
        adjList[i] = [];

        for (let j = 0; j < adjMatrix.length;j++ )
        {
            if(adjMatrix[i][j]){
                adjList[i].push[j];
            }
        }
    }
    return adjMatrix;
}
*/
function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (let u = 0; u < adjMatrix.length; u++) {
	adjList[u] = [];
	for (let v = 0; v < adjMatrix.length; v++) {
	    if (adjMatrix[u][v]) {
		adjList[u].push(v);
	    }
	}
    }
    return adjList;
}
