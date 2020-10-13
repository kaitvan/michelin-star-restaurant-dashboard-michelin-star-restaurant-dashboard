const menuView = () => {
  $('#app').html(`<div id="error-message-menu"></div>
                  <div class="container">
                    <div class="row mt-5 mb-5">
                      <div class="col">
                        <button type="button" class="btn btn-outline" id="addMenuItemBtn">Add a Menu Item</button>
                      </div>
                      <div class="col">
                        <button type="button" class="btn btn-outline" id="viewIngredientsBtn">View Ingredients</button>
                      </div>
                      <div class="col d-flex justify-content-end align-self-center">
                        Search for ingredients.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col" id="menuItems">
                        MENU ITEMS
                      </div>
                  </div>`);
  $('a.nav-link#reservationLink').css({ color: 'white' });
  $('a.nav-link#staffLink').css({ color: 'white' });
  $('a.nav-link#menuLink').css({ color: '#EA859E' });
};

export default { menuView };
