import "./styles.css";
import DownCaret from "./menu-down.svg";

/*
  Critical:
  - Check getSelectedOption
  Optional:
  - Add a default option and "defaultOption" function
  
*/

function createDropDown() {

  let optionsArray;
  let displayList;
  let selectedOption = {};

  const container = document.createElement("div");
  const optionsContainer = document.createElement("div");
  const topBar = document.createElement("div");
  const topBarText = document.createElement("p");
  const topBarCaret = document.createElement("img");

  const getSelectedOption = () => selectedValue;

  const setOptions = (options) => optionsArray = options;

  const setBarBackground = (colour) =>
    topBar.setAttribute("style", `background-color:${colour}`
  )

  const updateOptionsVisibility = (newVis) => {
    displayList = newVis;
    if (newVis) {
      optionsContainer.setAttribute("class","drop-down-list-display");
    } else {
      optionsContainer.setAttribute("class","drop-down-list-no-display");
    }
  }

  const generateOptionsContainer = () => {

    optionsArray.forEach((element,index) => {
      
      const option = document.createElement("div");
      option.setAttribute("class", "selector-drop-down-item");
      option.setAttribute("style",`top: calc(${index+1}*var(--drop-down-height))`);
      option.setAttribute("data-selected-option-text",element.itemText);
      option.setAttribute("data-selected-option-value",element.itemValue);
      option.textContent = element.itemText;

      option.addEventListener("click",() => {
        selectedOption = {
          text: option.dataset.selectedOptionText,
          value: option.dataset.selectedOptionValue
        }
        topBarText.textContent = selectedOption.text;
        updateOptionsVisibility(false);
      });
      
      optionsContainer.appendChild(option);

    });

    return optionsContainer;

  }


  const generateDOM = () => {

    updateOptionsVisibility(false);

    
    container.setAttribute("class","drop-down-container");
    
    const optionsContainerDOM = generateOptionsContainer(displayList);
    container.appendChild(optionsContainerDOM);
   
    topBar.setAttribute("class","selector-bar");

    topBarText.setAttribute("id","selector-text");
    topBarText.textContent = "Make a selection...";
    topBar.appendChild(topBarText);

    topBarCaret.setAttribute("id","selector-caret");
    topBarCaret.setAttribute("src","");
    // topBarCaret.setAttribute("src",DownCaret);
    topBar.appendChild(topBarCaret);
   
    container.appendChild(topBar);

    topBar.addEventListener("click",() => {
      updateOptionsVisibility(!displayList);
      //generateDOM()
    });

    return container;

  }

  return {
    generateDOM,
    setOptions,
    getSelectedOption,
    setBarBackground
  };

};

export {
  createDropDown as default
};