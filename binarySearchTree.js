export class BinarySearchTree {
    root = null;
    length = 0;

    #insert(node, value) {
        if (node.value > value) {
            // 루트노드보다 작은 값이면
            if (node.left) {
                this.#insert(node.left, value);
            } else {
                node.left = new Node(value);
            }
        } else {
            // 루트노드보다 큰 값이면
            if (node.right) {
                this.#insert(node.right, value);
            } else {
                node.right = new Node(value);
            }
        }
    }
    insert(value) {
        // 어떤 값을 넣으려할때, 일단 어디에 넣을지 모르겠다.
        // 그래서 왼팔, 오른팔한테 맡긴다.
        // 근데 만약 왼팔 오른팔이 없으면 거기다가 넣는다.
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.#insert(this.root, value);
        }
        // 숙제: 이미 넣은 값을 넣은 경우 에러 처리(alert, throw)
    }
    #search(node, value) {
        if (node.value > value) {
            // 더 작은값 찾을때
            if (!node.left) {
                return null;
            }
            if (node.left.value === value) {
                return node.left;
            }
            return this.#search(node.left, value);
        } else {
            if (!node.right) {
                return null;
            }
            if (node.right.value === value) {
                return node.right;
            }
            return this.#search(node.right, value);
        }
        
    }
    search(value) {
        // 어떤 값을 찾으려할때, 일단 어디에 있는지 모르겠다.
        // 그래서 왼팔, 오른팔한테 맡긴다.
        // 찾으면 그 노드 return, 못찾으면 null return
        if (!this.root) {
            return null;
        }
        if (this.root.value === value) {
            return this.root;
        }
        return this.#search(this.root, value);
    }
    #remove(node, value) {
        if (!node) {
            // 제거할 값이 bst에 존재하지 않는 경우
            return null; // 지울 값이 존재 안 하면 false return
        }
        if (node.value === value) { // 자식 입장
            // 지울 값을 찾은 경우
            if (!node.left && !node.right) {
                // leaf
                return null;
            } else if (!node.left) { // 왼팔만 없는 경우
                return node.right;
            } else if (!node.right) { // 오른팔만 없는 경우
                return node.left;
            } else { // 양팔 다 있는 경우
                let exchange = node.left;
                while (exchange.right) {
                    exchange = exchange.right;
                }
                const temp = node.value;
                node.value = exchange.value;
                exchange.value = temp;
                node.left = this.#remove(node.left, temp);
                return node;
            }
        } else { // 부모 입장
            if (node.value > value) {
                node.left = this.#remove(node.left, value)
                return node;
            } else {
                node.right = this.#remove(node.right, value);
                return node;
            }
        }
    }
    remove(value) {
        // 1. leaf(양팔 다 없음) -> 제거
        // 2. leaf x, 왼팔이 없다 -> 오른팔 끌어올린다
        // 3. leaf x, 오른팔이 없다 -> 왼팔 끌어올린다
        // 4. leaf x, 양팔 다 있다 -> 왼팔에서 가장 큰 애와 바꾼다,leaf를 지운다
        this.root = this.#remove(this.root, value);
        return // 숙제로 length return하게
    }
}
class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}

// const bst = new BinarySearchTree();
// bst.insert(8);
// bst.insert(10);
// bst.insert(3);
// bst.insert(1);
// bst.insert(14);
// bst.insert(6);
// bst.insert(7);
// bst.insert(4);
// bst.insert(13);
// console.log(bst.search(7));
// console.log(bst.search(5));
// bst.remove(8);
// console.log(bst.remove(15)); // false
// bst.remove(4);
// bst;

// const bst2 = new BinarySearchTree();
// bst2.insert(50);
// bst2.remove(50);
// bst2.root; // null