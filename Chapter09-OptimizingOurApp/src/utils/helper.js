export function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }
  