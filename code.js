function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) 
    {
	adjList[i] = [];
	for (let j = 0; j < adjMatrix.length; j++) {
	    if (adjMatrix[i][j]) {
		adjList[i].push(j);
	    }
	}
    }
    return adjList;
}


