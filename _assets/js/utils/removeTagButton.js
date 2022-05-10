import { replaceState } from "./replaceHistory";

export default function removeTagButton(button, state) {
    console.log(button)
    button.addEventListener('click', function() {
        console.log('clicked');
        console.log(state);
    });
}