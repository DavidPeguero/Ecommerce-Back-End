// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// // Define a Driver as having one License to create a foreign key in the `license` table
// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   // When we delete a Driver, make sure to also delete the associated License.

//   onDelete: 'CASCADE',
// });

// // We can also define the association starting with License
// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey : 'id',
  onDelete : 'CASCADE'
})
// Categories have many Products
Category.hasMany(Product, {
  through : 'id'
})
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
