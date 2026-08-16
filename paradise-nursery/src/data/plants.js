export const categories = [
  {
    id: 'succulents',
    name: 'Succulents',
    products: [
      { id: 1, name: 'Aloe Vera', price: 18, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Haworthia', price: 22, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Echeveria', price: 20, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Jade Plant', price: 25, image: 'https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80' },
      { id: 5, name: 'String of Pearls', price: 28, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80' },
      { id: 6, name: 'Panda Plant', price: 24, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'tropical',
    name: 'Tropical Plants',
    products: [
      { id: 7, name: 'Monstera Deliciosa', price: 42, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' },
      { id: 8, name: 'Snake Plant', price: 35, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=600&q=80' },
      { id: 9, name: 'ZZ Plant', price: 38, image: 'https://images.unsplash.com/photo-1614594575921-936c4f09e2f7?auto=format&fit=crop&w=600&q=80' },
      { id: 10, name: 'Bird of Paradise', price: 55, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80' },
      { id: 11, name: 'Calathea Orbifolia', price: 48, image: 'https://images.unsplash.com/photo-1597055181300-4eaf93064e56?auto=format&fit=crop&w=600&q=80' },
      { id: 12, name: 'Philodendron', price: 40, image: 'https://images.unsplash.com/photo-1612363228102-3a7f8d0f0e7d?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'flowering',
    name: 'Flowering Plants',
    products: [
      { id: 13, name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80' },
      { id: 14, name: 'Orchid', price: 45, image: 'https://images.unsplash.com/photo-1566930662805-f5f7c9a4f52e?auto=format&fit=crop&w=600&q=80' },
      { id: 15, name: 'Anthurium', price: 36, image: 'https://images.unsplash.com/photo-1593434683863-6c8d7cc8f37d?auto=format&fit=crop&w=600&q=80' },
      { id: 16, name: 'African Violet', price: 26, image: 'https://images.unsplash.com/photo-1596433809252-3d7b1ad24d6a?auto=format&fit=crop&w=600&q=80' },
      { id: 17, name: 'Bromeliad', price: 34, image: 'https://images.unsplash.com/photo-1528476513691-07c9f6c5a0e7?auto=format&fit=crop&w=600&q=80' },
      { id: 18, name: 'Begonia', price: 29, image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

export const allPlants = categories.flatMap((category) => category.products);
