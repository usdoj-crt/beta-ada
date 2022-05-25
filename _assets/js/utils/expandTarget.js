export default function expandTarget(targetID){
    const target = document.getElementById(targetID);
    if (target) {
        if (target.hasAttribute('hidden')) {
            target.removeAttribute('hidden');
            document.getElementById("expand-more").style.display = 'none';
            document.getElementById('expand-less').style.display = 'block';
        } else {
            target.setAttribute('hidden', "");
            document.getElementById("expand-more").style.display = 'block';
            document.getElementById('expand-less').style.display = 'none';
        }
    }
}