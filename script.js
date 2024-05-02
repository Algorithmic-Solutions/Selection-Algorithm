function selectionSort(arr) {
  // Loop through each element of the array (excluding the last element)
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      // Count comparisons during inner loop (for exact number calculation)
      comparisons++;
    }

    // Swap the element at the current index with the minimum element if necessary
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
function Visualization(array) {
  let content = document.getElementById("content");
  content.innerHTML = "";
  const result = selectionSort(array.slice());
  content.innerHTML += result;
  content.innerHTML += ",";
}
let comparisons = 0;
const unsortedArray = [64, 25, 12, 22, 11];
Visualization(unsortedArray.slice());
