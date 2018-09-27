This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Notes

要更新 React 的 state 時，永遠不直接操作現有的 state。  
我們要 const 一個新的 state，做好變動後，再把新的 state 用 `setState()` 來放上去。官方給的原因：  

1. Complex Features Become Simple
  Immutability makes complex features much easier to implement. Later in this tutorial, we will implement a “time travel” feature that allows us to review the tic-tac-toe game’s history and “jump back” to previous moves. This functionality isn’t specific to games — an ability to undo and redo certain actions is a common requirement in applications. Avoiding direct data mutation lets us keep previous versions of the game’s history intact, and reuse them later.

2. Detecting Changes
  Detecting changes in mutable objects is difficult because they are modified directly. This detection requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed.  
  Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.

3. Determining When to Re-render in React
  The main benefit of immutability is that it helps you build *pure components* in React. Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.  
  You can learn more about `shouldComponentUpdate()` and how you can build pure components by reading [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html#examples).

## 有關 arrow function 在 `onClick` 的注意事項

- `onClick` 後面要跟 arrow function： 

```jsx
class Square extends React.Component {
 render() {
   return (
     <button className="square" onClick={() => alert('click')}>
       {this.props.value}
     </button>
   );
 }
}
```

Notice how with `onClick={() => alert('click')}`, we’re passing *a function* as the `onClick` prop.  
**It only fires after a click.**  
Forgetting `() =>` and writing `onClick={alert('click')}` is a common mistake, and would fire the alert every time the component re-renders.  


- 改寫 functional component 變成一個 function：  

```jsx
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

When we modified the Square to be a functional component, we also changed `onClick={() => this.props.onClick()}`   
to a shorter `onClick={props.onClick}`.  

（注意箭頭兩邊的括弧都移除了）  

In a class, we used an arrow function to access the correct `this` value, but in a functional component we don’t need to worry about `this`.  
