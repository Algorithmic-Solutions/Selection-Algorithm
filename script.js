function selectionSort(arr) {
  // Loop through each element of the array (excluding the last element)
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the element at the current index with the minimum element if necessary
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
let content = document.getElementById("content");
function Visualization(array) {
  let displayedNumbers = "";

  for (let i = 0; i < array.length; i++) {
    displayedNumbers += (i > 0 ? ", " : "") + array[i].toString();
  }

  content.innerHTML = displayedNumbers;
}

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  const value = e.target.value;
  if (isNaN(value)) {
    alert("Please enter a valid number!");
    reset();
  }
  Visualization(value);
});
function reset() {
  content.innerHTML = "";
  input.value = "";
}
document.querySelector("#reset").addEventListener("click", reset);
