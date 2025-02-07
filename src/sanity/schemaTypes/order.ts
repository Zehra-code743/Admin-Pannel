// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       {
//         name: 'firstName',
//         title: 'First Name',
//         type: 'string'
//       },
//       {
//         name: 'lastName',
//         title: 'Last Name',
//         type: 'string'
//       },
//       {
//         name: 'address',
//         title: 'Address',
//         type: 'string'
//       },
//       {
//         name: 'city',
//         title: 'City',
//         type: 'string'
//       },
//       {
//         name: 'zipCode',
//         title: 'Zip Code',
//         type: 'string'
//       },
//       {
//         name: 'phone',
//         title: 'Phone',
//         type: 'string'
//       },
//       {
//         name: 'email',
//         title: 'Email',
//         type: 'string'
//       },
//       {
//         name: 'discount',
//         type: 'number',
//         title: 'Discount'
//       },
//       {
//         name: 'total',
//         title: 'Total',
//         type: 'number'
//       },
//       {
//         name: 'orderDate',
//         title: 'Order Date',
//         type: 'datetime'
//       },
//       {
//         name: 'status',
//         title: 'Order Status',
//         type: 'string',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Success', value: 'success' },
//             { title: 'Dispatch', value: 'dispatch' }
//           ],
//           layout: 'radio'
//         },
//         initialValue: 'pending'
//       },
//       {
//         name: 'cartItems',
//         title: 'Cart Items',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               { name: 'productName', title: 'Product Name', type: 'string' },
//               { name: 'image', title: 'Image', type: 'image' }
//             ]
//           }
//         ]
//       }
//     ]
//   };
  










export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatched", value: "dispatched" }, // Fixed spelling
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productName", title: "Product Name", type: "string" },
            {
              name: "image",
              title: "Product Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
