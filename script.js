let content = document.getElementById("content");
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
  animateSort(arr);
  return arr;
}
function animateSort(sortedArray) {
  const elements = content.querySelectorAll("span"); // Get all elements

  for (let i = 1; i < elements.length; i++) {
    // Skip the first bracket
    if (elements[i].textContent !== sortedArray[i - 1]) {
      // Check if position changed
      elements[i].style.transform = "translateX(0)"; // Remove offset
      elements[i].style.opacity = 1; // Full visibility
    }
  }
}
function Visualization(value) {
  const numbersArray = value.split(",");
  if (!numbersArray.length || !numbersArray.every((num) => !isNaN(num))) {
    alert("Please enter valid numbers separated by commas!");
    return reset();
  }
  content.innerHTML = value;
  document.querySelector(".sorted").addEventListener("click", () => {
    const sortedArray = selectionSort(numbersArray.map(Number));
    content.innerHTML = sortedArray.join(", ");
  });
}

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  Visualization(e.target.value);
});
function reset() {
  content.innerHTML = "";
  input.value = "";
}
document.querySelector("#reset").addEventListener("click", reset);
