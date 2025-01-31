# MongoDB Aggregation: $unwind Stage Issue with Empty Arrays

This repository demonstrates a subtle bug in a MongoDB aggregation pipeline that arises when the \$unwind stage encounters an empty array.  The standard \$unwind behavior might not be intuitive and can lead to unexpected results. 

## Bug Description

The provided code implements a pipeline to calculate total sales per product category.  The problem occurs when a document in the input collection doesn't have a matching entry in the 'products' collection (leading to an empty 'product' array after the \$lookup stage).  The \$unwind stage then mishandles this, causing inaccurate aggregation. 

## Solution

The solution employs a conditional \$unwind to handle the case where 'product' array is empty. This ensures that empty arrays don't cause unexpected results during aggregation.

## How to Reproduce

1.  Clone the repository.
2.  Set up a MongoDB connection. 
3.  Run `bug.js`.
4.  Compare the results with those of `bugSolution.js` to see the bug in action.  The differences will show that the original code doesn't aggregate correctly for entries with no associated product information.
