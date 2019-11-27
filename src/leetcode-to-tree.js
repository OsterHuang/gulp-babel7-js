/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function toTree(array) {
  let root = new TreeNode()
  const treeInArr = []

  root.val = array[0]
  treeInArr[0] = root

  for (let i = 1; i < array.length; i++) {
    if (array[i] === null) continue

    let parentIdx = (i - 1) / 2
    treeInArr[i] = new TreeNode(array[i])
    if (parentIdx % 1 === 0) {
      // left node
      treeInArr[parentIdx].left = treeInArr[i]
    } else {
      // right node
      treeInArr[Math.floor(parentIdx)].right = treeInArr[i]
    }
  }

  return root
}

const t1Arr = [1, 3, 2, 5]
// const t2Arr = [2, 1, 3, null, 4, null, 7]
// const t2Arr = [1, 3, 2, 5, 7, 8, null, null, 15, 9]

// const t1 = toTree(t1Arr)
const t2 = toTree(t2Arr)
// console.log(JSON.stringify(t2, undefined, 2))
