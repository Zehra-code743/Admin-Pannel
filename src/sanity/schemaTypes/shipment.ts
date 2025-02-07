// export default {
//     title: 'Shipment',
//     name: 'Shipment',
//     type: 'document',
//     fields: [
//       {
//         title: 'Name',
//         name: 'title',
//         type: 'string'
//       },
//       {
//         title: 'Costumar',
//         name: 'poster',
//         type: 'image'
//       },
//       {
//         title:'delevery',
//         name: 'delivery',
//         type: 'string'
//       },
//       {
//         title: 'Release Date',
//         name: 'releaseDate',
//         type: 'date'
//       },
//     {
//         title: 'Launch Scheduled At',
//         name: 'launchAt',
//         type: 'datetime',
//         options: {
//           dateFormat: 'YYYY-MM-DD',
//           timeFormat: 'HH:mm',
//           timeStep: 15,
//           calendarTodayLabel: 'Today'
//         }
//       }
//     ]

//     }




































export default {
  title: "Shipment",
  name: "shipment",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "title",
      type: "string",
    },
    {
      title: "Customer Image",
      name: "poster",
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
      title: "Launch Scheduled At",
      name: "launchAt",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
  ],
};
















