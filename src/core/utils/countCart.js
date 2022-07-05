import localStorage from "./localStorage";

export default {
  // Cria um item no localStorage
  count: () => {
    let qt = 0;
    if (localStorage.get("cart")) {
      if (localStorage.get("cart").pizzas) {
        qt += localStorage.get("cart").pizzas.length;
      }
      if (localStorage.get("cart").drinks) {
        qt += localStorage.get("cart").drinks.length;
      }
    }

    return qt;
  }
};
