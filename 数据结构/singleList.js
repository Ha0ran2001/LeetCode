// 创建节点
class CreateNode {
  constructor(element) {
    this.ele = element;
    this.next = null;
  }

}
// 链表
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
  // 先连后断
  insert(element, index) {
    if (index >= 0 && index < this.length) {
      let node = new CreateNode(element);
      // 插在头部
      if (index === 0) {
        let current = this.head;
        node.next = current.next;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        console.log(previous);
        let current = previous.next;
        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    }
    return false;
  }
  // 返回特定位置的元素
  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // 移除一个元素
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 返回元素的索引
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (this.equalsFn(element, current.ele)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 从特定位置移除一个元素
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(position - 1);
        const current = previous.next;
        previous.next = current.next;
      }

      this.length--;
      return current.ele;
    }
    return undefined;
  }

  // 如果链表为空，返回 true
  isEmpty() {
    return this.size() === 0;
  }

  //  返回链表的长度
  size() {
    return this.length;
  }

  // 返回表示整个链表的字符串
  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.ele}`;
    let current = this.head.next;
    for (let i = 0; i < this.length && current !== null; i++) {
      objString = `${objString}, ${current.ele}`;
      current = current.next;
    }
    return objString;
  }

}

function defaultEquals(a, b) {
  return a === b;
}

// test
const list = new LinkedList();
