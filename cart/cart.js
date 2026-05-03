function addToCart(item) {
        const cart = getCart();
        const i = cart.findIndex(x => x.id === item.id);
        if (i >= 0) cart[i].qty += item.qty || 1;
        else cart.push({ id: item.id, title: item.title, price: Number(item.price), image: item.image, qty: item.qty || 1 });
        saveCart(cart);
        updateCartCount();
    }
