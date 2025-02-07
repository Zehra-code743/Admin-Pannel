import { defineQuery } from "next-sanity";

const orderQuery = defineQuery(`
    *[_type == "order"] {
      _id,
      firstName,
      lastName,
      address,
      city,
      zipCode,
      phone,
      email,
      discount,
      total,
      orderDate,
      status,
      cartItems[]{
        productName,
        "imageUrl": image.asset->url
      }
    }
  `);
  


// Query for Delivery documents
const deliveryQuery = defineQuery(`
  *[_type == "delivery"] {
    _id,
    title,
    "customerImage": image.asset->url, // Ensures the image URL is fetched
    delivery,
    releaseDate,
    country,
    status,
    ourBrand
  }
`);

// Query for Shipment documents
const shipmentQuery = defineQuery(`
  *[_type == "shipment"] {
    _id,
    title,
    "customerImage": poster.asset->url, // Ensures the image URL is fetched
    delivery,
    releaseDate,
    launchAt
  }
`);

export {orderQuery, deliveryQuery, shipmentQuery };
