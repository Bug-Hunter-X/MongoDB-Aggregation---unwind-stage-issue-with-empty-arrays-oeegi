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
    $unwind: '$product'
  },
  {
    $group: {
      _id: '$product.category',
      totalSales: { $sum: '$amount' }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
console.log(result);
```