const printButtonFunction = () => {
    // Grab our print button:
    const printButton = document.getElementById('crt-page--printbutton');
    
    // Print function:
    function printPage() {
        window.print();
    }
    
    // Assign an event listener - on click do this
    if (printButton) {
        printButton.addEventListener('click', function(){
            printPage();
        });
    }
}

printButtonFunction();