/**
 * 把 s 变成字符串数组。遍历，遇到 "("，把这个的下标 push 到一个栈里，遇到 ')' pop 这个下标
 * 如果此时 栈里没有可以 pop 的了，就删除这个下标所对应的原字符串数组的值
 * 最后再看栈里还有东西没，还有就删除栈存的下标所对应的字符串数组该位置的值，直到栈为空
 * 最后过滤一遍，因为用 delete 方法删除后，原位置为 undefined
 * 
 * @param s 
 * @returns 
 */


function minRemoveToMakeValid(s: string): string {
  let res: string[] = [...s];
  let stack: number[] = [];
  for (let i: number = 0; i < res.length; i++) {
    let ch: string = res[i];
    if (ch === '(') {
      stack.push(i)
    } else if (ch === ')') {
      if (stack.length) stack.pop();
      else delete (res[i]);
    }
  }

  while (stack.length) {
    let idx: number = stack.pop();
    delete res[idx];
  }

  res = res.filter(item => item);
  return res.join('');
};