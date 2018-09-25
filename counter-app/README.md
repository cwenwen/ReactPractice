This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Notes

Get started

```sh
npx create-react-app react-app
cd react-app
npm start
```

因為有引入 [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) 這個 extension，可以用這些快速鍵：

```jsx
imrc;
// import React, { Component } from "react";
```

```jsx
cc;
// class Component
```

`export default` 也可以加在 class Counter 宣告那一行的開頭，就不用多這一行：

```jsx
export default Counter;
```

JSX 中，要寫 JavaScript 語法，要加上 {}。  
JSX 中，`<React.Fragment>` 可以取代 `<div>` 來當一個父元素，而不會被 render 出來。  
（因為 React 不能 render sibling 的元素。）

在標籤裡加上 `style={this.styles}` 來使用以下 style：

```jsx
styles = {
  // 這裡要用駝峰式取代 CSS 中的 dash。
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
