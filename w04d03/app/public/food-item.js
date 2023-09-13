$('h2'); // select all h2's on the page
$('<h2>'); // create an empty h2 for us

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.text('hello'); // <h2>hello</h2>
// $h2.addClass('welcome'); // <h2 class="welcome">hello</h2>

// const $h2 = $('<h2 class="welcome">hello</h2>');

$(() => {

  const $foodItemContainer = $('#food-item-container');

  const createFoodItem = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <header class="food-item-header">
          <h2>Name: ${foodItem.name}</h2>
          <h3>ID: ${foodItem.id}</h3>
        </header>
        <p>Tagline: ${foodItem.tagline}</p>
        <footer class="food-item-footer">
          <h3>Price: $${foodItem.price}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </footer>
      </article>
    `);

    return $foodItem;
  };

  const renderFoodItems = (foodItems) => {
    // empty the container
    $foodItemContainer.empty();

    // loop through the provided array
    for (const foodItem of foodItems) {
      // call the createFoodItem function with each element of the array
      const $foodItem = createFoodItem(foodItem);

      // append the return value to the food item container
      // $foodItemContainer.append($foodItem);
      $foodItemContainer.prepend($foodItem);
    }
  };

  const loadFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  loadFoodItems();

  // grab the form
  const $form = $('#new-food-item-form');

  // attach a submit handler to it
  $form.on('submit', (event) => {
    // stop the browse from submitting the form
    event.preventDefault();
    
    // grab the data from the form
    const formData = $form.serialize();

    // make a post request to the server
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: formData,
      success: () => {
        console.log('the post request resolved successfully');
        loadFoodItems();
      },
    });
  });

});
