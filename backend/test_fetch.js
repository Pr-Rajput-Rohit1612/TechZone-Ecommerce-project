(async function(){
  try{
    console.log('fetch /api/products');
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    console.log('got products length', Array.isArray(data)?data.length:Object.keys(data).length);
  }catch(e){
    console.error('fetch error', e);
  }
})();
