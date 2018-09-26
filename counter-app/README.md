This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Notes

## Session 1: get started

```sh
npx create-react-app react-app
cd react-app
npm start
```

因為有引入 [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) 這個 extension，可以用這些快速鍵：

```jsx
imrc
// import React, { Component } from "react";
```

```jsx
cc
/* 
class [輸入 component] extends Component {
  state = {  }
  render() { 
    return (  );
  }
}
 
export default [輸入 component];
*/
```

這邊用預設的格式，  
但 `export default` 也可以加在 class Counter 宣告那一行的開頭，就不用多這一行：

```jsx
export default Counter;
```

JSX 中，要寫 JavaScript 語法，要加上 {}。  
JSX 中，`<React.Fragment>` 可以取代 `<div>` 來當一個父元素，而不會被 render 出來。  
（因為 React 只能 render 單一的元素。）

在標籤裡加上 `style={this.styles}` 來使用以下 style：

```jsx
styles = {
  // 這裡要用駝峰式取代 CSS 中的 dash
  // 數字 10 會自動變成 10px
  fontSize: 10,
  fontWeight: "bold"
};
```

在 JSX 的標籤中直接寫 CSS，記得要兩個 {}。像這樣：

```jsx
style={{ fontSize: 30 }}
```

Destructuring 解構，  
簡化 this.state.count：

```jsx
const { count } = this.state;
```

array 中每個元素都要加上 key，以避免這個 warning：  
`Warning: Each child in an array or iterator should have a unique "key" prop.`  
加上 key 後，在必須改變 DOM 時，React 會使用這個 key 找出那個被改變的元素。

```jsx
<ul>
  {this.state.tags.map(tag => (
    <li key="">{tag}</li>
  ))}
</ul>
```

想依照不同條件 render 不同東西時，  
把 `render()` 中的 `return` 改為自定的一個 function `{ this.renderTags() }`，  
在元素中宣告這個 function：

```jsx
renderTags() {
  // 狀況 1：
  if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  // 狀況 2：
  return (
    <ul>
      {this.state.tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
```

另一個想依照條件 render 元素的方法，用 `&&`：  
(在 `this.state.tags.length === 0` 時，render `"Please create a new tag!"`)

```jsx
render() {
  return (
    <div>
      {this.state.tags.length === 0 && "Please create a new tag!"}
      {this.renderTags()}
    </div>
  );
}
```

要讓標籤的 attribute 如 `onClick={handleClick}` 的 `handleClick` 有作用，必須加上 constructor：

```jsx
constructor() {
  super(); // 有了這行才能繼承父元素的 this
  this.handleClick = this.handleClick.bind(this); // 使用 bind() 來讓 handleClick 可以用 this
}
```

或是用 arrow function 來宣告 `handleClick`，就不用 `bind()`  
（arrow function 也太讚了吧！）

```jsx
handleClick = () => {
  // 這裡面用 this 不會有問題，不用 bind()
};
```

改變 state 用 `setState()`：

```jsx
this.setState({ count: this.state.count + 1 });
```

Passing Event Arguments  
目前 `handleIncrement` 這個 method 沒有 take any parameter（就只有按了加 1），  
但真正的 app 中我們會需要 pass argumants with our events。
例如我們在購物網站，按 buttun 啟動 `handleIncrement` 時，我們想同時得到商品的 ID，知道是哪個商品加 1。  

方法 1，寫另一個 method 給 ID（程式碼較雜亂）：  
```jsx
// 新的 method
doHandleIncrement = () => {
  this.handleIncrement({ id: 1 }); // product 就是 { id: 1 }
};

// 改變 btn 的 onClick
<button onClick={this.doHandleIncrement}>Increment</button>
// 本來是 onClick={this.handleIncrement}

// handleIncrement 加入參數（product 也就是平常用的 e）
handleIncrement = product => {
  console.log(product) // { id: 1 }
  this.setState({ count: this.state.count + 1 });
};
```

方法 2，btn 直接加上 inline function（較好）：
```jsx
<button onClick={ () => this.handleIncrement({ id: 1 })}>Increment</button>
// 把新的 method 直接寫在 btn 裡，讓按鈕按下時，順便紀錄商品 ID
```

## Session 2: composing components

- Pass data
- Raise and handle events
- Multiple components in sync
- Functional components
- Lifecycle hooks

React 是由 components tree 組成的。  
要在一個 `<Counters />` 底下 render 多個 `<Counter />` 時，  
這樣比較笨：

```jsx
// Counters 元素內
render() { 
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
```

這樣比較好：

```jsx
// Counters 元素內
state = { 
  counters: [
    { id: 1, value: 0},
    { id: 2, value: 0},
    { id: 3, value: 0},
    { id: 4, value: 0}
  ]
}

render() { 
  return (
    <div>
      {this.state.counters.map(counter => <Counter key={counter.id} id={counter.id} />)}
    </div>
  );
}
```