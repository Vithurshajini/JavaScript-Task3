let classAArray = [];
let classBArray = [];

function submitDetails(classType) {
    const input = document.getElementById(classType === 'a' ? 'aInput' : 'bInput');
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        if (classType === 'a') {
            classAArray.push(inputValue);
            displayOutput('classAOutput', classAArray);
        } else {
            classBArray.push(inputValue);
            displayOutput('classBOutput', classBArray);
        }
        input.value = '';
    }
}

function displayOutput(containerId, dataArray) {
    const outputContainer = document.getElementById(containerId);
    outputContainer.innerHTML = '';
    const para = document.createElement('p');
    para.textContent = JSON.stringify(dataArray);
    outputContainer.appendChild(para);
}

function mergeArrays() {
    const mergedArray = classAArray.concat(classBArray);
    displayOutput('mergedOutputContainer', mergedArray);
}

mergeArrays(); 