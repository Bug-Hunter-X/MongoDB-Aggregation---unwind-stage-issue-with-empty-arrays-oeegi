```javascript
const pipeline = [
  {
    $lookup: {
      from: 'products',
      localField: 'product_id',
      foreignField: '_id',
      as: 'product'
    }
  },
  {
    $unwind: {
      path: '$product',
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $group: {
      _id: { $ifNull: ['$product.category', 'No Product'] },
      totalSales: { $sum: '$amount' }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
console.log(result);
```