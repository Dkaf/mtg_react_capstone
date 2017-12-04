export function findInArray(array, idType, itemId) {
  let newArray = array.slice();
  return newArray.splice(newArray.findIndex(item => item[idType] === itemId ), 1);
};

export function updateArray(array, idType, itemId, callback) {
  const updatedItems = array.map(item => {
    if (item[idType] !== itemId) return item;

    const updatedItem = callback(item);
    return updatedItem;
  });

  return updatedItems;
};

export function addToArray(array, item) {
  const newArray = array.slice();
  newArray.splice((newArray.length),0, item);
  return newArray
};

export function filterArray(array, remove, prop) {
  const filterResults = array.filter( (item) => {
    if (prop) {
      return item[prop] !== remove && item[prop] !== undefined      
    } else {
      return item !== remove
    }
  });
  return filterResults;
};