// export default {
//     title: "Delivery",
//     name: "delivery",
//     type: "document",
//     fields: [
//       {
//         title: "Name",
//         name: "title",
//         type: "string",
//       },
//       {
//         title: "Customer", // Fixed spelling from "Costumar"
//         name: "image",
//         type: "image",
//       },
//       {
//         title: "Delivery", // Fixed spelling from "delevery"
//         name: "delivery",
//         type: "string",
//       },
//       {
//         title: "Release Date",
//         name: "releaseDate",
//         type: "date",
//       },
//       {
//         title: "Country",
//         name: "country",
//         type: "string",
//       },
//       {
//         title: "Status",
//         name: "status", // Changed to lowercase "status" for consistency
//         type: "array",
//         of: [{ type: "string" }],
//       },
//       {
//         title: "Our Brand",
//         name: "ourBrand", // Changed from "SZ Supermarket" (invalid name) to a valid variable-friendly format
//         type: "array",
//         of: [{ type: "string" }],
//       },
//     ],
//   };
  












export default {
  title: "Delivery",
  name: "delivery",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "title",
      type: "string",
    },
    {
      title: "Customer Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Delivery Type",
      name: "delivery",
      type: "string",
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "date",
    },
    {
      title: "Country",
      name: "country",
      type: "string",
    },
    {
      title: "Status",
      name: "status",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Our Brand",
      name: "ourBrand",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
