const restaurantItem = (restaurant) => `
  <a href="/#/detail/${restaurant.id}" class="text-decoration-none text-primary" title="Restoran ${restaurant.name}">
  </a>
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  restaurantItem,
};
