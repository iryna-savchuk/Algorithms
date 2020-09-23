let binarySearch = (array, search) => {
  let start = 0;
  let end = array.length;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (search === array[middle]) {
      return console.log(`Search value was found! Index: ${middle}`  );
    }

    if (search > array[middle]) {
      console.log("Searching in the right side of the array");
      start = middle + 1;
    }

    if (search < array[middle]) {
      console.log("Searching in the left side of the array");
      end = middle - 1;
    }
  }
  console.log("Search value is not found in array");
};

const result = binarySearch([ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12);
