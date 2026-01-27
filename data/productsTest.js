import { Product, Clothing, Appliance } from './products.js';

describe('Product class', () => {
  it('creates a product with correct properties', () => {
    const product = new Product({
      id: 'test-id',
      image: 'test-image.png',
      name: 'Test Product',
      rating: { stars: 4, count: 10 },
      priceCents: 1000,
      keywords: ['test']
    });

    expect(product.id).toBe('test-id');
    expect(product.name).toBe('Test Product');
    expect(product.priceCents).toBe(1000);
  });

  it('returns empty extraInfoHTML', () => {
    const product = new Product({});
    expect(product.extraInfoHTML()).toBe('');
  });
});

describe('Clothing class', () => {
  it('creates a clothing product with size chart link', () => {
    const clothing = new Clothing({
      sizeChartLink: 'images/size-chart.png'
    });

    expect(clothing.sizeChartLink).toBe('images/size-chart.png');
  });

  it('extraInfoHTML contains Size chart link', () => {
    const clothing = new Clothing({
      sizeChartLink: 'images/size-chart.png'
    });

    expect(clothing.extraInfoHTML()).toContain('Size chart');
  });
});

describe('Appliance class', () => {
  it('creates an appliance with instructions and warranty links', () => {
    const appliance = new Appliance({
      instructionsLink: 'instructions.png',
      warrantyLink: 'warranty.png'
    });

    expect(appliance.instructionsLink).toBe('instructions.png');
    expect(appliance.warrantyLink).toBe('warranty.png');
  });

  it('extraInfoHTML contains Instructions and Warranty', () => {
    const appliance = new Appliance({
      instructionsLink: 'instructions.png',
      warrantyLink: 'warranty.png'
    });

    const html = appliance.extraInfoHTML();

    expect(html).toContain('Instructions');
    expect(html).toContain('Warranty');
  });
});