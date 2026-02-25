/**
 * Fills models.json with Stayclassy-style products (Glass Case, Clear Case, Name Case)
 * for every model that has empty products array.
 * Reference: https://stayclassy.in/
 */

const fs = require('fs');
const path = require('path');

const MODELS_PATH = path.join(__dirname, '../src/pages/models.json');

// Stayclassy product images (from stayclassy.in)
const PRODUCT_IMAGES = {
  glass: 'https://stayclassy.in/wp-content/uploads/2024/08/Glass-Case-Custom-Thumbnail-Final-7-247x247.jpg',
  clear: 'https://stayclassy.in/wp-content/uploads/2024/08/Clear-Case-Custom-Thumbnail-Final-38-247x247.jpg',
  nameCase: 'https://stayclassy.in/wp-content/uploads/2024/08/Glass-Case-Custom-Thumbnail-Final-7-247x247.jpg',
};

function getProductsForModel(modelName) {
  return [
    {
      id: 1,
      title: `${modelName} Glass Case`,
      image: PRODUCT_IMAGES.glass,
      oldPrice: 698,
      price: 349,
    },
    {
      id: 2,
      title: `${modelName} Clear Case`,
      image: PRODUCT_IMAGES.clear,
      bg: 'from-yellow-200 to-yellow-400',
      oldPrice: 598,
      price: 299,
    },
    {
      id: 3,
      title: `${modelName} Name Case`,
      image: PRODUCT_IMAGES.nameCase,
      oldPrice: 698,
      price: 349,
    },
  ];
}

function main() {
  const data = JSON.parse(fs.readFileSync(MODELS_PATH, 'utf8'));
  let updated = 0;

  for (const brand of Object.keys(data)) {
    const models = data[brand];
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      model.products = getProductsForModel(model.model);
      updated++;
    }
  }

  fs.writeFileSync(MODELS_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Filled products for ${updated} models.`);
}

main();
