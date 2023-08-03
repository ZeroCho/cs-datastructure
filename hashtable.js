class Hashtable {
    data = []; // capa로 제한
    constructor(capa) { // 공간복잡도(O(N))
        this.capa = capa;
    }
    insert(key, value) { // 시간복잡도(O(1))
        const hash = hashF(key, this.capa);
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push({ key, value }); 
    }
    search(key) { // 시간복잡도 O(N/hash)
        const hash = hashF(key, this.capa);
        if (this.data[hash]) {
            for (let i = 0; i < this.data[hash].length; i++) {
                if (this.data[hash][i].key === key) {
                    return this.data[hash][i].value;
                }
            }
        }
        return null;
    }
    update(key, value) { // 시간복잡도 O(N/hash)
        const hash = hashF(key, this.capa);
        if (this.data[hash]) {
            for (let i = 0; i < this.data[hash].length; i++) {
                if (this.data[hash][i].key === key) {
                    this.data[hash][i].value = value;
                }
            }
        }
    }
    delete(key) { // 시간복잡도 O(N/hash)
        const hash = hashF(key, this.capa);
        if (this.data[hash]) {
            for (let i = 0; i < this.data[hash].length; i++) {
                if (this.data[hash][i].key === key) {
                    this.data[hash].splice(i, 1);
                }
            }
        }
    }
}
function hashF(key, mod) {
    if (typeof key === 'string') {
        return key.split('').reduce((a, c) => a + c.charCodeAt(), 0) % mod
        // ['a', 'b', 'c'] -> [97, 98, 99] -> 294 -> 24
    }
    if (typeof key === 'number') {
        return key % mod;
    }
}

const ht = new Hashtable(30);
ht.insert('abc', 'hello')
ht.insert(31, 'hello')
ht.insert(61, 'bye');
ht.insert(83, true);
ht.insert(115, 135);
console.log(ht.search(61)); // 'bye'
console.log(ht.search(99)); // null
ht.update(83, false);
ht.delete(31);
ht;


1, 2, 3
31, 32, 33
61, 62, 63
91, 92, 93