// import { sanityFetch } from "@/sanity/lib/live";
// import { orderQuery, deliveryQuery, shipmentQuery } from "@/sanity/lib/queries";

// // Interfaces for type safety
// interface OrderItem {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   address: string;
//   city: string;
//   zipCode: string;
//   phone: string;
//   email: string;
//   discount: number;
//   total: number;
//   orderDate: string;
//   status: string;
//   cartItems: {
//     productName: string;
//     imageUrl: string;
//   }[];
// }

// interface DeliveryItem {
//   _id: string;
//   title: string;
//   customerImage: string;
//   delivery: string;
//   releaseDate: string;
//   country: string;
//   status: string;
//   ourBrand: string;
// }

// interface ShipmentItem {
//   _id: string;
//   title: string;
//   customerImage: string;
//   delivery: string;
//   releaseDate: string;
//   launchAt: string;
// }

// export default async function DashboardPage() {
//   // Fetching data
//   const orderResponse = await sanityFetch({ query: orderQuery });
//   const orders: OrderItem[] = orderResponse.data;

//   const deliveryResponse = await sanityFetch({ query: deliveryQuery });
//   const deliveries: DeliveryItem[] = deliveryResponse.data;

//   const shipmentResponse = await sanityFetch({ query: shipmentQuery });
//   const shipments: ShipmentItem[] = shipmentResponse.data;

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-12">Dashboard</h1>

//       {/* Orders Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{order.firstName} {order.lastName}</h3>
//                 <p className="text-sm text-gray-500">{order.email}</p>
//                 <p className="mt-4">Address: {order.address}, {order.city}, {order.zipCode}</p>
//                 <p className="mt-2">Order Total: ${order.total.toFixed(2)}</p>
//                 <p className="mt-2">Status: <span className={`font-semibold ${order.status === 'Shipped' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span></p>
//                 <div className="mt-4">
//                   {order.cartItems.map((item, idx) => (
//                     <div key={idx} className="flex items-center mb-2">
//                       <img src={item.imageUrl} alt={item.productName} className="w-10 h-10 object-cover rounded-full mr-3" />
//                       <p>{item.productName}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Deliveries Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Deliveries</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {deliveries.map((delivery) => (
//             <div key={delivery._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{delivery.title}</h3>
//                 <p className="text-sm text-gray-500">{delivery.country}</p>
//                 <p className="mt-2">Release Date: {delivery.releaseDate}</p>
//                 <p className="mt-2">Status: <span className={`font-semibold ${delivery.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{delivery.status}</span></p>
//                 <div className="mt-4">
//                   <img src={delivery.customerImage} alt={delivery.title} className="w-full h-40 object-cover" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Shipments Section */}
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shipments</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {shipments.map((shipment) => (
//             <div key={shipment._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{shipment.title}</h3>
//                 <p className="text-sm text-gray-500">Launch Date: {shipment.launchAt}</p>
//                 <p className="mt-2">Delivery: {shipment.delivery}</p>
//                 <div className="mt-4">
//                   <img src={shipment.customerImage} alt={shipment.title} className="w-full h-40 object-cover" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }














import { sanityFetch } from "@/sanity/lib/live";
import { orderQuery, deliveryQuery, shipmentQuery } from "@/sanity/lib/queries";
import Image from "next/image";
// Interfaces for type safety
interface OrderItem {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  discount: number;
  total: number;
  orderDate: string;
  status: string;
  cartItems: {
    productName: string;
    imageUrl: string;
  }[];
}

interface DeliveryItem {
  _id: string;
  title: string;
  customerImage: string;
  delivery: string;
  releaseDate: string;
  country: string;
  status: string;
  ourBrand: string;
}

interface ShipmentItem {
  _id: string;
  title: string;
  customerImage: string;
  delivery: string;
  releaseDate: string;
  launchAt: string;
}

export default async function DashboardPage() {
  // Fetching data
  const orderResponse = await sanityFetch({ query: orderQuery });
  const orders: OrderItem[] = orderResponse.data;

  const deliveryResponse = await sanityFetch({ query: deliveryQuery });
  const deliveries: DeliveryItem[] = deliveryResponse.data;

  const shipmentResponse = await sanityFetch({ query: shipmentQuery });
  const shipments: ShipmentItem[] = shipmentResponse.data;

  return (
    <div className="p-8 bg-gradient-to-r from-rose-600 to-pink-400 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-12 tracking-wide border-2 border-slate-600 rounded-lg bg-transparent px-4 py-2 font-serif shadow-lg shadow-red-700 hover:animate-bounce">Admin Dashboard</h1>

      {/* Orders Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => (
            <div key={order._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{order.firstName} {order.lastName}</h3>
                <p className="text-sm text-gray-600">{order.email}</p>
                <p className="mt-4 text-gray-700">Address: {order.address}, {order.city}, {order.zipCode}</p>
                <p className="mt-2 text-lg font-bold text-indigo-600">Order Total: ${order.total.toFixed(2)}</p>
                <p className="mt-2 text-sm">Status: <span className={`font-semibold ${order.status === 'Shipped' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span></p>
                <div className="mt-4">
                  {order.cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <img src={item.imageUrl} alt={item.productName} className="w-10 h-10 object-cover rounded-full mr-3" />
                      <p className="text-sm text-gray-700">{item.productName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliveries Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">Deliveries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveries.map((delivery) => (
            <div key={delivery._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{delivery.title}</h3>
                <p className="text-sm text-gray-600">{delivery.country}</p>
                <p className="mt-2 text-sm text-gray-500">Release Date: {delivery.releaseDate}</p>
                <p className="mt-2 text-sm">Status: <span className={`font-semibold ${delivery.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{delivery.status}</span></p>
                <div className="mt-4 shadow-lg shadow-black rounded-lg">
                  <img src={delivery.customerImage} alt={delivery.title} className="w-full h-40 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipments Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">Shipments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shipments.map((shipment) => (
            <div key={shipment._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{shipment.title}</h3>
                <p className="text-sm text-gray-600">Launch Date: {shipment.launchAt}</p>
                <p className="mt-2 text-sm text-gray-500">Delivery: {shipment.delivery}</p>
                <div className="mt-4 shadow-2xl shadow-black rounded-lg">
                  <img src={shipment.customerImage} alt={shipment.title} className="w-full h-40 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
