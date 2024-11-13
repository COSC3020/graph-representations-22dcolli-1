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
    return adjList;
}
*/
function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) {
	adjList[i] = [];
	for (let v = 0; v < adjMatrix.length; v++) {
	    if (adjMatrix[i][v]) {
		adjList[i].push(v);
	    }
	}
    }
    return adjList;
}


