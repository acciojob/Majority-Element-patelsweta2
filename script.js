//your code here

function findMajorityElement(arr) {
    
    const elementCount = {};

    
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        
        if (elementCount[currentElement]) {
            elementCount[currentElement]++;
        } else {
            elementCount[currentElement] = 1;
        }

        
        if (elementCount[currentElement] > Math.floor(arr.length / 2)) {
            return currentElement;
        }
    }

    
    return -1;
}


const inputArray = [2, 1, 2];
const majorityElement = findMajorityElement(inputArray);
console.log(majorityElement);