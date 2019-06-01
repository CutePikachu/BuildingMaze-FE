function findPath(graph, srcX, srcY, destX, destY) {
  let queue = [];
  let that = new Array(10);
  for (let i = 0; i < 10; i++) that[i] = new Array(10);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) that[i][j] = false;
  }
  that[srcX][srcY] = true;

  queue.push(srcX * 10 + srcY);

  while (queue.length) {
    let curr = queue.shift();
    if (curr == destX * 10 + destY) return true;

    let tmp = {
      x: Math.floor(curr / 10),
      y: curr % 10
    };
    if (
      tmp.x > 0 &&
      that[tmp.x - 1][tmp.y] == false &&
      graph[tmp.x - 1][tmp.y] != "w"
    ) {
      that[tmp.x - 1][tmp.y] = true;
      queue.push((tmp.x - 1) * 10 + tmp.y);
    }
    if (
      tmp.x < 9 &&
      that[tmp.x + 1][tmp.y] == false &&
      graph[tmp.x + 1][tmp.y] != "w"
    ) {
      that[tmp.x + 1][tmp.y] = true;
      queue.push((tmp.x + 1) * 10 + tmp.y);
    }
    if (
      tmp.y > 0 &&
      that[tmp.x][tmp.y - 1] == false &&
      graph[tmp.x][tmp.y - 1] != "w"
    ) {
      that[tmp.x][tmp.y - 1] = true;
      queue.push(tmp.x * 10 + tmp.y - 1);
    }
    if (
      tmp.y < 9 &&
      that[tmp.x][tmp.y + 1] == false &&
      graph[tmp.x][tmp.y + 1] != "w"
    ) {
      that[tmp.x][tmp.y + 1] = true;
      queue.push(tmp.x * 10 + tmp.y + 1);
    }
  }
  return false;
}

export { findPath as default };
