const axios = require('axios');

const api = axios.create({ baseURL: 'http://localhost:5000' });

async function safePost(path, body, token) {
  try {
    return await api.post(path, body, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
  } catch (err) {
    console.error(`POST ${path} failed:`, err.response ? { status: err.response.status, data: err.response.data } : err.message);
    throw err;
  }
}

async function safeGet(path, token) {
  try {
    return await api.get(path, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
  } catch (err) {
    console.error(`GET ${path} failed:`, err.response ? { status: err.response.status, data: err.response.data } : err.message);
    throw err;
  }
}

(async function run() {
  try {
    console.log('=== GET /api/products ===');
    const productsRes = await safeGet('/api/products');
    console.log('Products count:', Array.isArray(productsRes.data) ? productsRes.data.length : Object.keys(productsRes.data).length);

    const first = Array.isArray(productsRes.data) ? productsRes.data[0] : productsRes.data[0];

    console.log('\n=== SIGNUP ===');
    const time = Date.now();
    const signupBody = { name: { firstname: 'Auto', lastname: 'Tester' }, email: `autotest+${time}@example.com`, password: 'Password123!', contact: '9999999999' };
    const signupRes = await safePost('/api/auth/signup', signupBody);
    console.log('Signup token present:', !!signupRes.data.token);
    const token = signupRes.data.token;

    console.log('\n=== ADD TO CART ===');
    const addBody = { product: { id: first.id, title: first.title, price: first.price, image: first.image } };
    const addRes = await safePost('/api/cart/add', addBody, token);
    console.log('Add to cart response items count:', addRes.data.items.length);

    console.log('\n=== GET CART ===');
    const cartRes = await safeGet('/api/cart', token);
    console.log('Cart items:', cartRes.data.items);

    console.log('\n=== PLACE ORDER ===');
    const orderProducts = cartRes.data.items.map(i => ({ productId: i.productId, quantity: i.quantity }));
    const total = cartRes.data.items.reduce((s,i)=>s + i.price * i.quantity, 0);
    const orderBody = { products: orderProducts, totalAmount: Math.round(total*100)/100, deliveryInfo: { fullName: 'Auto Tester', address: 'Test Address', state: 'State', postCode: '00000', contact: '9999999999', country: 'India' }, promoCode: null, discount: 0 };
    const orderRes = await safePost('/api/orders', orderBody, token);
    console.log('Order created ID:', orderRes.data.order._id);

    console.log('\n=== SUCCESS ===');
  } catch (err) {
    process.exitCode = 1;
  }
})();
