import findFocus from "./findFocus"

export default function moveFocus(fromHere, toThere, optionsArray, targetElement) {
	switch(fromHere) {
		case targetElement:
			if (toThere === 'forward') {
				optionsArray[0].focus()
			} else if (toThere === 'back') {
				optionsArray[optionsArray.length - 1].focus()
			}
			break
		case optionsArray[0]: 
			if (toThere === 'forward') {
				optionsArray[1].focus()
			} else if (toThere === 'back') {
				targetElement.focus()
			}
			break
		case optionsArray[optionsArray.length - 1]:
			if (toThere === 'forward') {
				optionsArray[0].focus()
			} else if (toThere === 'back') {
				optionsArray[optionsArray.length - 2].focus()
			}
			break
		default: // middle list or filtered items 
			const currentItem = findFocus()
			const whichOne = optionsArray.indexOf(currentItem)
			if (toThere === 'forward') {
				const nextOne = optionsArray[whichOne + 1]
				nextOne.focus()
			} else if (toThere === 'back' && whichOne > 0) {
				const previousOne = optionsArray[whichOne - 1]
				previousOne.focus()
			} else { // if whichOne = 0
				targetElement.focus()
			}
			break
	}
};
