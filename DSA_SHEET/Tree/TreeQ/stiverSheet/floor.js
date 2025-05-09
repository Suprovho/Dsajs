function floor(root, key) {
    if (!root) return -1; // Base case: if node is null, return -1

    if (root.data === key) {
        return root.data; // Exact match, return the value
    }

    if (root.data < key) {
        // If current node is smaller than key, it could be a floor, check right subtree
        let rightFloor = this.floor(root.right, key);
        return (rightFloor !== -1) ? rightFloor : root.data;
    }
    return this.floor(root.left, key);
}
