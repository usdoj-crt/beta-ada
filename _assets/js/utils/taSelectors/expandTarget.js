export default function expandTarget(targetID){
    const target = document.getElementById(targetID);
    if (target) {
        if (target.hasAttribute('hidden')) {
            target.removeAttribute('hidden');
            // Toggle the drop down button icons:
            document.getElementById("expand-more").style.display = 'none';
            document.getElementById('expand-less').style.display = 'block';
            // Set the proper aria expanded attribute:
            document.getElementById('category-expand').setAttribute('aria-expanded', 'true');
        } else {
            target.setAttribute('hidden', "");
                        // Toggle the drop down button icons:
            document.getElementById("expand-more").style.display = 'block';
            document.getElementById('expand-less').style.display = 'none';
             // Set the proper aria expanded attribute:
            document.getElementById('category-expand').setAttribute('aria-expanded', 'false');
        }
    }
}