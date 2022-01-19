class Node {
  constructor(data) {
    // data 为当前节点储存的数据
    this.data = data;

    // next 指向下一个节点
    this.next = null;

    // pre 指向上一个节点
    this.pre = null;
  }
}

class DoubleLinkedList {
  constructor() {
    // 双向链表的开头
    this.head = null;

    // 双向链表的结尾
    this.tail = null;
  }

  // 在链表尾部添加一个节点
  add(item) {
    let node = new Node(item);

    // 如果当前链表还没有头，否则在尾部添加上该节点
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  // 在链表指定位置添加一个节点
  addAt(index, item) {
    let current = this.head;
    let counter = 1;
    let node = new Node(item);

    // 如果在头部插入
    if (index === 0) {
      this.head.pre = node;
      node.next = this.head;
      this.head = node;
    }
    // 如果在非头部插入，则需要从头开始找寻插入位置
    else {
      while (current) {
        current = current.next;
        if (counter === index) {
          node.pre = current.pre;
          current.pre.next = node;
          node.next = current;
          current.pre = node;
        }
        counter++;
      }
    }
  }

  // 删除链表指定项节点
  remove(item) {
    let current = this.head;

    while (current) {
      if (current.data === item) {
        // 如果目标节点既是链表头，又是链表尾
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        }
        // 如果仅仅是链表头
        else if (current === this.head) {
          this.head = this.head.next;
          this.head.pre = null;
        }
        // 如果仅仅是链表尾
        else if (current === this.tail) {
          this.tail = this.tail.pre;
          this.tail.next = null;
        } else {
          current.pre.next = current.next;
          current.next.pre = current.pre;
        }
      }
      current = current.next;
    }
  }

  // 删除指定位置节点
  removeAt(index, item) {
    let current = this.head;
    let counter = 1;
    let node = new Node(item);

    if (index === 0) {
      this.head = this.head.next;
      this.head.pre = null;
    } else {
      while (current) {
        current = current.next;
        if (current === this.tail) {
          this.tail = this.tail.pre;
          this.tail.next = null;
        } else if (counter === index) {
          current.pre.next = current.next;
          current.next.pre = current.pre;
          break;
        }
        counter++;
      }
    }
  }

  // 翻转链表
  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;

      // 前后倒置
      current.next = prev;
      current.pre = next;

      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = null;
  }

  // 交换数据
  swap(index1, index2) {
    // 保持idnex1始终小于index2
    if (index1 > index2) {
      return swap(index2, index1);
    }

    let current = this.head;
    let counter = 0;
    let firstNode;

    while (current) {
      if (counter === index1) {
        firstNode = current;
      } else if (counter === index2) {
        let temp = current.data;
        current.data = firstNode.data;
        firstNode.data = temp;
      }

      current = current.next;
      counter++;
    }

    return true;
  }

  isEmpty() {
    return this.length() < 1;
  }

  length() {
    let current = this.head;
    let counter = 0;

    while (current) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  // 遍历链表 接收一个遍历函数
  traverse(fn) {
    let current = this.head;

    while (current) {
      fn(current);
      current = current.next;
    }

    return true;
  }

  // 查找某个节点的索引
  find(item) {
    let current = this.head;
    let counter = 0;

    while (current) {
      if (current.data === item) {
        return counter;
      }
      current = current.next;
      counter++;
    }

    return false;
  }

}