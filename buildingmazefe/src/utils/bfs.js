//-----------------------------------------------
/*
Suppose graph element is an object defined as
element {
	type: 0-9 or e f w s,
	position: {
		x: ,
		y: ,
		level:
	},
	no: 0-99/224;
}

graph is an array of element

reachable only when they are on the same level and 
adajcent
*/
//------------------------------------------------

import queue from './queue'

function reachable(v, w, g) {
	if (g[v].level != g[w].level) return false;
	if (abs(g[v].position.x - g[w].position.x) + abs(g[v].position.y - g[w].position.y) > 2) return false;
	return true;
}

function bfs(graph, graphSize, src, dest) {
	let found = 0;//found the destination or not
	let visited = Array(graphSize).fill(-1);
	let found = dobfs(graph, src.no, dest.no, visited, found);
	if (!found) return false;
	return true;
}

function dobfs(g, src, dest, visited, found) {
	let queue = newQueue();
	visited[src] = 1;//mark as visited
	enqueue(queue, src);

	while(!isEmpty(queue) && !found) {
		let curr = dequeue(queue);
		for (let i = 0; i < visited.length; i++) {
			if (visited[i] || !reachable(i, curr, g)) continue;
			else if (g[i].type == "w") visited[i] = 1;
			else if (i == dest) found = 1;
			else {
				visited[i] = 1;
				enqueue(queue, i);
			}
		}
	}
	emptyQueue(queue);
	return found;
}