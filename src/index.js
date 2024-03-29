import './styles.css';
import DownCaret from './menu-down.svg';

/*
  Critical:
  - caret not showing

  Optional:
  - Change drop down element background color
  - Add a default option and "defaultOption" function
  - Change 
  
*/

function createDropDown() {
	let optionsArray;
	let displayList;
	let selectedOption = {};
	let optionFontColor = '#ffffff';
	let optionBackgroundColor = 'rgb(90, 147, 197)';

	const container = document.createElement('div');
	const optionsContainer = document.createElement('div');
	const topBar = document.createElement('div');
	const topBarText = document.createElement('p');
	const topBarCaret = document.createElement('img');

	// The "change" event will be dispatched on an option being changed
	// This event can be listened for to collect the selected value
	const changeEvent = new Event('change', { bubbles: true });

	const getSelectedOption = () => selectedOption;

	const setOptions = (options) => (optionsArray = options);

	const setFontSize = (size) =>
		container.setAttribute('style', `font-size: ${size}`);

	const setBarBackground = (colour) =>
		topBar.setAttribute('style', `background-color:${colour}`);

	const setBarFontColor = (color) =>
		topBarText.setAttribute('style', `color: ${color}`);

	const setOptionFontColor = (color) => (optionFontColor = color);

	const setOptionBackgroundColor = (color) => (optionBackgroundColor = color);

	const updateOptionsVisibility = (newVis) => {
		displayList = newVis;
		if (newVis) {
			optionsContainer.setAttribute('class', 'drop-down-list-display');
		} else {
			optionsContainer.setAttribute('class', 'drop-down-list-no-display');
		}
	};

	const generateOptionsContainer = () => {
		optionsArray.forEach((element, index) => {
			const option = document.createElement('div');
			option.setAttribute('class', 'selector-drop-down-item');
			option.setAttribute(
				'style',
				`top: calc(${index + 1}*var(--drop-down-height)); color:${optionFontColor}; background-color: ${optionBackgroundColor}`
			);
			option.setAttribute('data-selected-option-text', element.text);
			option.setAttribute('data-selected-option-value', element.value);
			option.textContent = element.text;

			option.addEventListener('click', () => {
				selectedOption = {
					text: option.dataset.selectedOptionText,
					value: option.dataset.selectedOptionValue,
				};
				topBarText.textContent = selectedOption.text;
				updateOptionsVisibility(false);
				option.dispatchEvent(changeEvent);
			});

			optionsContainer.appendChild(option);
		});

		return optionsContainer;
	};

	const generateDOM = () => {
		updateOptionsVisibility(false);

		container.setAttribute('class', 'drop-down-container');

		const optionsContainerDOM = generateOptionsContainer(displayList);
		container.appendChild(optionsContainerDOM);

		topBar.setAttribute('class', 'selector-bar');

		topBarText.setAttribute('id', 'selector-text');
		topBarText.textContent = 'Make a selection...';
		topBar.appendChild(topBarText);

		topBarCaret.setAttribute('id', 'selector-caret');
		topBarCaret.setAttribute('src', DownCaret);
		topBar.appendChild(topBarCaret);

		container.appendChild(topBar);

		topBar.addEventListener('click', () => {
			updateOptionsVisibility(!displayList);
			//generateDOM()
		});

		return container;
	};

	return {
		generateDOM,
		setOptions,
		getSelectedOption,
		setFontSize,
		setBarBackground,
		setBarFontColor,
		setOptionBackgroundColor,
		setOptionFontColor,
	};
}

export { createDropDown as default };
