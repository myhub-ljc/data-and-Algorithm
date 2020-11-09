//需要了解的是：括号是否闭合
/**
 * 解题步骤
 * 1,新建一个栈
 * 2,扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法
 * 3,最后栈空了就合法，否则不合法
 */

 /**
  * 先用栈实现
  * 后再用字典实现一遍
  */
 
 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //做个小小优化：长度如为奇数 直接退出
  if(s.length % 2 === 1) {
      return false;
  }
  //新建一个栈(用数组模拟栈)
  const stack = [];
  //扫描字符串
  for(let i = 0; i < s.length; i++) {
      //拿到扫描的每个字符串
      const c = s[i];
      //对满足下列条件的：就使其入栈
      if(c === '(' || c === '{' || c === '[') {
          stack.push(c);
      } else {
          //拿到栈顶的
          const t = stack[stack.length - 1];
          if(
              (t === '(' && c === ')') ||
              (t === '{' && c === '}') ||
              (t === '[' && c === ']')
          ) {
              stack.pop();
          } else {
              return false;
          }
      }
  }
  //判断栈是否为空
  return stack.length === 0 ? true : false;
};