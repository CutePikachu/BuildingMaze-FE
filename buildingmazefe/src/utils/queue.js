
//create a new queue
function newQueue() {
  return [];
}

function enqueue(q, el) {
  q.push(el);
}

function dequeue(q) {
  if (isEmpty(1)) return "underFlow";
  let el = q.shift();
  return el;
}

function isEmpty(q) {
  if (q.length > 0) return false;
  return true;
}

function emptyQueue(q) {
  q = [];
}

module.exports = {newQueue, enqueue, dequeue, isEmpty, emptyQueue}