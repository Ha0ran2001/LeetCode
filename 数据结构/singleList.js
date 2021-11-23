
class CreateNode {
  constructor(element) {
    this.ele = element;
    this.next = null;
  }

}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.length = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  // 向链表末尾添加一个新元素
  push(element) {
    const node = new CreateNode(element);
    let current;
    // 链表为空的时候（head === null），添加的是第一个元素
    // 不为空。是追加元素
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // 向链表特定位置插入一个特定元素
  insert(element, position) { }

  // 返回特定位置的元素
  getElementAt(index) { }

  // 移除一个元素
  remove(element) { }

  // 返回元素的索引
  indexOf(element) { }

  // 从特定位置移除一个元素
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;

      }

      this.length--;
      return current.ele;
    }
    return undefined;
  }

  // 如果链表为空，返回 true
  isEmpty() { }

  //  返回链表中的元素
  size() { }

  // 返回表示整个链表的字符串
  toString() { }

}

function defaultEquals(a, b) {
  return a === b;
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(13);
let ans = list.removeAt(1);
console.log(list, ans);