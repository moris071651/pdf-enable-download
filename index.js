function unhideButtons() {
    const printButton = document.getElementById('print');
    const downloadButton = document.getElementById('download');

    if (printButton && downloadButton) {
        printButton.classList.remove('hidden');
        downloadButton.classList.remove('hidden');
        console.log("Print and Download buttons are now visible!");
    } else {
        console.log("Viewer.js detected, but buttons not found.");
    }
}

function detectViewerJS() {
    if (typeof PDFViewerApplication !== "undefined") {
        console.log("Viewer.js detected!");
        unhideButtons();
        return true;
    }
    return false;
}

if (!detectViewerJS()) {
    console.log("Waiting for Viewer.js...");

    const observer = new MutationObserver(() => {
        if (detectViewerJS()) {
            observer.disconnect();z
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
