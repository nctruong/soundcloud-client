Selectors are functions that take Redux state as an argument and return some data to pass to the component.

They can be as simple as:
```reactjs
const getDataType = state => state.editor.dataType;
```