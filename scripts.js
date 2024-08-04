document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const buttons = document.getElementsByClassName('tool--btn');
    const saveButton = document.getElementById('save-content');

    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            let cmd = btn.getAttribute('data-command');
            if (cmd === 'createlink') {
                let url = prompt("Enter the link here: ", "http://");
                document.execCommand(cmd, false, url);
            } else {
                document.execCommand(cmd, false, null);
            }
        });
    }

    saveButton.addEventListener('click', () => {
        const content = output.innerHTML;
        localStorage.setItem('savedContent', content);
        alert('Content saved!');
    });

    // Load saved content
    if (localStorage.getItem('savedContent')) {
        output.innerHTML = localStorage.getItem('savedContent');
    }
});
