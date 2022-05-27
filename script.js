function renderCart(items) {
  const $order = document.querySelector("#cart")
  const $cart = document.querySelector(".cart")
  const $contents = document.querySelector(".contents")
  const $total = document.querySelector(".total")

  if ($order) {
    $cart.innerHTML = items.map((item) =>
    `<div class="item">
      <div class="quantity">
        <a href="${item.page}"><img src="../${item.id}.jpg" alt="${item.name}"></a>
        <span>x ${item.quantity}</span>
      </div>
      <div class="buttons">
        <button type="button" onClick="cartLS.quantity('${item.id}',-1);">-</button>
        <button type="button" onClick="cartLS.quantity('${item.id}',1);">+</button>
        <button type="button" class="remove" onClick="cartLS.remove('${item.id}');">Remove</button>
      </div>
    </div>`).join("")

    var orderitems = items.map((item) => `${item.quantity}*${item.id};`).join("")

    document.getElementById("items").setAttribute("value",orderitems);
    $total.innerHTML = "Amount to pay (excl shipping): <strong>€" + cartLS.total()/10 + "&nbsp;/&nbsp;" + cartLS.total() + "&nbsp;SEK</strong><br>(€30&nbsp;/&nbsp;300&nbsp;SEK per print)"
  }

  var stickyCart = "Cart (" + cartLS.total()/300 + ")";

  if (items.length == 0 && $contents) {
    $contents.innerHTML = "<span>" + stickyCart + "</span>";
  } else if ($contents) {
    $contents.innerHTML = "<a href='/cart'>" + stickyCart + "</a>";
  }

}
renderCart(cartLS.list())
cartLS.onChange(renderCart)

var invalidClassName = 'invalid'
var inputs = document.querySelectorAll('input, select, textarea')
if (inputs.length) {
  inputs.forEach(function (input) {
    input.addEventListener('invalid', function () {
      input.classList.add(invalidClassName)
      document.querySelector('.error').classList.add('active')
    })
    input.addEventListener('input', function () {
      if (input.validity.valid) {
        input.classList.remove(invalidClassName)
      }
    })
  })
  document.querySelector("form").addEventListener( "invalid", function( event ) {
    event.preventDefault();
  }, true );
}

var nav = document.getElementById('menu-overlay');
if (nav) {
  document.querySelector(".js-open-menu").addEventListener('click', function(e) {
    nav.classList.add("active");
    e.preventDefault()
  });
  document.querySelector(".js-close-menu").addEventListener('click', function(e) {
    nav.classList.remove("active");
    e.preventDefault()
  });
}
