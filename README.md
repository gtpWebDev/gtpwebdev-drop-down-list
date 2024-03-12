# gtpwebdev-drop-down-list

A configurable Dropdown component alternative


This library is currently private.

## Installation

```
npm install gtpwebdev-drop-down-list --save
```

## Usage

```javascript
import createDropDown from 'gtpwebdev-drop-down-list';

const newDropDown = createDropDown()
```

## Configuration

### setOptions()

Add the options available to the user - a display text and stored value for each option

```javascript
newDropDown.setList(
[
  {
    text: "List item number 1",
    value: 1
  },
  {
    text: "List item number 2",
    value: 2
  }
]
```

### setBarBackground()

Set the background colour of the top selection bar
```javascript
newDropDown.setBarBackground("#ffdb4f");
```

### generateDOM()

Add the DOM node to a parent node
```javascript
const newDOM = newDropDown.generateDOM();
parentNode.appendChild(newDOM);
```

### getSelectedOption()

Get an object containing the selected option text and value
```js
const { text, value } = newDropDown.getSelectedOption();
```

### Collecting the text and value of the selection option

A "change" event is dispatched when an item on the drop down list is selected.
```js
newDOM.addEventListener(
  "change",
  () => {
    const { text, value } = newDropDown.getSelectedOption();
  }
)
```


### An example

```js
import createDropDown from "gtpwebdev-dropdown-list4";

onst newDropDown = createDropDown();
newDropDown.setList(
  [
    {
      text: "First option",
      value: 1
    },
    {
      text: "A second option",
      value: 2
    },
    {
      text: "Another option",
      value: 5
    },
  ]
);
newDropDown.setBarBackground("#ffdb4f");
const newDOM = newDropDown.generateDOM();

selectProjContainer.appendChild(newDOM);
```

Event listener:
```js
newDOM.addEventListener(
  "change",
  () => {
    const { text, value } = newDropDown.getSelectedOption();
  }
)
```