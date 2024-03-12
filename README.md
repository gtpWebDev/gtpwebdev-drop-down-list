# gtpwebdev-drop-down-list

A configurable Dropdown component alternative


The library is available as an [add link here](https://addlinkhere).

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
    itemText: "List item number 1",
    itemValue: 1
  },
  {
    itemText: "List item number 2",
    itemValue: 2
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
const selection = newDropDown.getSelectedOption()
const selectedText = selection.text
const selectedValue = selection.value
```

### Usage of "change" event

The selected text and value can be collected using an event listener for the "change" event, which is triggered by a selection from the drop down list.
```js
newDOM.addEventListener(
  "change",
  () => {
    const selection = newDropDown.getSelectedOption()
    const selectedText = selection.text
    const selectedValue = selection.value
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

Event listener attached to the 
```js
newDOM.addEventListener(
  "change",
  () => {
    const selection = newDropDown.getSelectedOption()
    const selectedText = selection.text
    const selectedValue = selection.value
  }
)
```