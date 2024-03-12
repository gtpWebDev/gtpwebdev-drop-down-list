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

### An example

```javascript
import createDropDown from "gtpwebdev-dropdown-list4";

onst newDropDown = createDropDown();
newDropDown.setList(
  [
    {
      itemText: "Odin 6: To Do List",
      itemValue: 1
    },
    {
      itemText: "DIY Jobs",
      itemValue: 2
    },
    {
      itemText: "4th item that is very very very very long indeed",
      itemValue: 5
    },
  ]
);
newDropDown.setBarBackground("#ffdb4f");
const newDOM = newDropDown.generateDOM();

selectProjContainer.appendChild(newDOM);
```
