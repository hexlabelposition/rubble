// import React from 'react'

// // UI
// import Article from '@/shared/ui/Article'
// import Icon from '@/shared/ui/Icon'

// // Assets
// import locationIcon from '@shared/assets/icons/location.svg'

// interface Property {
//   id: number
//   image: string
//   title: string
//   price: string
//   location: string
//   labels: {
//     beds: string
//     baths: string
//     sqft: string
//   }
// }

// const properties: Property[] = [
//   {
//     id: 1,
//     image: './src/assets/images/property-1.png',
//     title: 'Classic Damara',
//     location: 'Dhaka, Bangladesh',
//     price: '$480.500',
//     labels: {
//       beds: '5',
//       baths: '3',
//       sqft: '2,500',
//     },
//   },
//   {
//     id: 2,
//     image: './src/assets/images/property-2.png',
//     title: 'Manstret Haven',
//     location: 'New York, United States',
//     price: '$425.000',
//     labels: {
//       beds: '3',
//       baths: '2',
//       sqft: '1,500',
//     },
//   },
//   {
//     id: 3,
//     image: './src/assets/images/property-3.png',
//     title: 'Garden View',
//     location: 'Dhaka, Bangladesh',
//     price: '$480.500',
//     labels: {
//       beds: '5',
//       baths: '3',
//       sqft: '2,500',
//     },
//   },
//   {
//     id: 4,
//     image: './src/assets/images/property-4.png',
//     title: 'Classic Damara',
//     location: 'Dhaka, Bangladesh',
//     price: '$480.500',
//     labels: {
//       beds: '5',
//       baths: '3',
//       sqft: '2,500',
//     },
//   },
//   {
//     id: 5,
//     image: './src/assets/images/property-5.png',
//     title: 'Manstret Haven',
//     location: 'New York, United States',
//     price: '$425.000',
//     labels: {
//       beds: '3',
//       baths: '2',
//       sqft: '1,500',
//     },
//   },
//   {
//     id: 6,
//     image: './src/assets/images/property-6.png',
//     title: 'Garden View',
//     location: 'Dhaka, Bangladesh',
//     price: '$480.500',
//     labels: {
//       beds: '5',
//       baths: '3',
//       sqft: '2,500',
//     },
//   },
// ]

// const labelsMap = {
//   beds: 'Beds',
//   baths: 'Bath',
//   sqft: 'sqft',
// }

// const iconsMap: {
//   [key: string]:
//     | 'bed'
//     | 'bath'
//     | 'maximize'
//     | 'location'
//     | 'buildings'
//     | 'calendar'
//     | 'dollarSquare'
//     | 'locationTick'
//     | 'logo'
//     | 'menu'
//     | 'top-right-arrow'
// } = {
//   beds: 'bed',
//   baths: 'bath',
//   sqft: 'maximize',
// }

// export default function Content(): React.ReactNode {
//   return (
//     <ul className="grid gap-4 laptop:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
//       {properties.map(({ id, image, title, location, price }: Property) => (
//         <li key={id}>
//           <Article>
//             <div className="mb-3 flex flex-col gap-2">
//               <img
//                 src={image}
//                 width={295}
//                 height={240}
//                 className="mb-2 w-full rounded-[10px] desktop:mb-3 desktop:rounded-xl"
//                 alt="Property"
//               />

//               <div className="flex justify-between">
//                 <h3 className="text-xl font-semibold text-primary-500">
//                   {title}
//                 </h3>
//                 <p className="text-xl font-semibold text-primary-500">
//                   {price}
//                 </p>
//               </div>

//               <div className="flex items-center gap-1">
//                 <Icon
//                   src={locationIcon}
//                   size={16}
//                   alt="Location"
//                   className="aspect-square desktop:h-5"
//                 />
//                 <p className="text-xs font-medium text-secondary-500 desktop:text-base">
//                   {location}
//                 </p>
//               </div>
//             </div>

//             {/* <ul className="flex justify-between gap-4 tablet:justify-evenly desktop:justify-between">
//                     {Object.entries(labels).map(([key, value]) => (
//                       <li
//                         key={key}
//                         className="flex h-[32px] items-center gap-[6px] rounded-lg border border-secondary-200 px-2 desktop:h-10 desktop:gap-2 desktop:px-3"
//                       >
//                         <Icon
//                           name={iconsMap[key as keyof typeof iconsMap]}
//                           className="aspect-square desktop:h-6"
//                         />

//                         <Typography
//                           tag="p"
//                           className="text-xs font-medium text-secondary-500 tablet:text-sm laptop:text-base"
//                         >
//                           {value} {labelsMap[key as keyof typeof labelsMap]}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul> */}
//           </Article>
//         </li>
//       ))}
//     </ul>
//   )
// }
