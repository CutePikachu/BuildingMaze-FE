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
	let queue = [];
	visited[src] = 1;//mark as visited
	queue.push(src);

	while(queue.length > 0 && !found) {
		let curr = queue.shift();
		for (let i = 0; i < visited.length; i++) {
			if (visited[i] || !reachable(i, curr, g)) continue;
			else if (g[i].type == "w") visited[i] = 1;
			else if (i == dest) found = 1;
			else {
				visited[i] = 1;
				queue.push(i);
			}
		}
	}
	queue = [];
	return found;
}