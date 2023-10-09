# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Function
* doesn't affect anything outside of the function
* takes in arguments, and works on those arguments only, returns a value
* if it is called with the same args, it will always return the same value

```js
let additive = 15;
let something = null;

const addTwo = (num) => {
  const total = num + additive;
  something = {};
  return total;
};
```

### Common Side Effects
* writing to standard out
* modifying the DOM directly
* establishing a web socket connection
* fetching data
* setting timers and intervals


### Ways of calling useEffect

```js
useEffect(() => {}); // called on every render
useEffect(() => {return cleanup}); // called before the next effect run
useEffect(() => {}, [searchTerm]); // called on initial render and then ONLY if the value of searchTerm changes
useEffect(() => {}, []); // called on the initial render only
```















