import findFocus from "./findFocus"

export default function moveFocus(fromHere, toThere, optionsArray, dropDownContainer) {
	// fromHere is the element you are currently on
	// toThere is decided by the arrow key pressed
	// optionsArray is the list of options within the dropDownContainer
	// dropDownContainer is the top level of the category selector element
	switch(fromHere) {
		case dropDownContainer:
			// If the current element is the drop down container and the down key is pressed, focus the first option within that dropdown:
			if (toThere === 'forward') {
				optionsArray[0].focus()
				// If the current element is the dropdown container and the up arrow is pressed, loop back to the last item in the options list:
			} else if (toThere === 'back') {
				optionsArray[optionsArray.length - 1].focus()
			}
			break
			case optionsArray[0]: 
			// If the first item in the dropdown list is focused, and the down key is pressed, then focus the next item in the list
			if (toThere === 'forward') {
				optionsArray[1].focus()
				// If you press the up arrow key then go back to the dropdown container
			} else if (toThere === 'back') {
				dropDownContainer.focus()
			}
			break
			// If the last item in the options list is the item in focus
		case optionsArray[optionsArray.length - 1]:
			// and the down arrow key is pressed, focus the first option in the list:
			if (toThere === 'forward') {
				optionsArray[0].focus()
				// if the up arrow key is pressed, then move back to the second to last item:
			} else if (toThere === 'back') {
				optionsArray[optionsArray.length - 2].focus()
			}
			break
		default: // middle list or filtered items 
			const currentItem = findFocus()
			const whichOne = optionsArray.indexOf(currentItem)
			// if the down arrow key is pressed
			if (toThere === 'forward') {
				// get the next item in the options array
				const nextOne = optionsArray[whichOne + 1]
				// put it into focus:
				nextOne.focus()
			// if the up arrow key is pressed:
			} else if (toThere === 'back' && whichOne > 0) {
				// get the previous item in the options list
				const previousOne = optionsArray[whichOne - 1]
				// focus it
				previousOne.focus()
			} else { // if whichOne = 0
				dropDownContainer.focus()
			}
			break
	}
};
