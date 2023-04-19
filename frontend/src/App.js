// import About from './components/about';
// import Products from './products_product/product_list';
// import Incentives from './components/incentives';
// import { useEffect, useState } from 'react';
import Brand from './components/brand';
// import PSales from './products_product/product_sales';
// import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Teams from './pages/teams';
// import Projects from './pages/projects';
// import { getApi } from './layout/helpers';
// import ProductsImages from './products_product/product_image';
// import Category from './components/cards';
import Nav from './layout/nav'



const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]
const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
//   const [phones, setphones] = useState([]);
//   const [tablets, settablets] = useState([]);
//   const [accessori, setaccessori] = useState([]);
  
//   useEffect(() => {
//     const fetchGet = async () => {
//        const response = await fetch('http://127.0.0.1:8000/phone/');
//        const resp = await fetch('http://127.0.0.1:8000/tablet/');
//        const resp2 = await fetch('http://127.0.0.1:8000/accessori/');
//        const data = await response.json();
//        const data2 = await resp.json();
//        const data3 = await resp2.json();
//        console.log('Phones:', data, 'Tablet:', data2, 'Accessori:', data3);
//        setphones(data);
//        settablets(data2);
//        setaccessori(data3);
//     };
//     fetchGet();
//  }, []);

// useEffect(() => {
//  const setphones = getApi('http://127.0.0.1:8000/phone/')
  // setphones(phones);
  // getApi('http://127.0.0.1:8000/tablet/')
//   console.log(setphones)
//   return setphones
// });

return (
    // <BrowserRouter>
    // <Nav />
    //   <Routes>
    //     <Route path='teams' element={<Teams />} />
    //     <Route path='projects' element={<Projects />} />
    //   </Routes>
    // </BrowserRouter> 
    // <Category /> 
    // <ProductsImages />
    //    <div className="m-5 max-w-7xl mx-auto px-4 sm:px-6 bg-white lg:px-8">
    //     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //       <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Phone</h2>
    //       <Products products={phones} />
    //     </div>
    //   </div> 
    //     <PSales />
    //     <Incentives />
    //     <div className="max-w-7xl mx-auto px-4 m-5 sm:px-6 lg:px-8">
    //       <Brand />
    //     </div>
    // <div className="m-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
    //     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //       <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Accessori</h2>
    //       <Products products={accessori} />
    //     </div>
    // </div>
    // <div className="m-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
    //     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //       <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Accessori</h2>
    //       <Products products={tablets} />
    //     </div>
    // </div>
     <div className="bg-white">
      <Nav />
     <main>
       {/* Category section */}
       <Brand />

       {/* Featured section */}
       <section
         aria-labelledby="social-impact-heading"
         className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
       >
         <div className="relative rounded-lg overflow-hidden">
           <div className="absolute inset-0">
             <img
               src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
               alt=""
               className="w-full h-full object-center object-cover"
             />
           </div>
           <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
             <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
               <h2
                 id="social-impact-heading"
                 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
               >
                 <span className="block sm:inline">Level up</span>
                 <span className="block sm:inline">your desk</span>
               </h2>
               <p className="mt-3 text-xl text-white">
                 Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                 than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                 really nice desk setup.
               </p>
               <a
                 href="#"
                 className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
               >
                 Shop Workspace
               </a>
             </div>
           </div>
         </div>
       </section>

       {/* Collection section */}
       <section
         aria-labelledby="collection-heading"
         className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
       >
         <h2 id="collection-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
           Shop by Collection
         </h2>
         <p className="mt-4 text-base text-gray-500">
           Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
         </p>

         <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
           {collections.map((collection) => (
             <a key={collection.name} href={collection.href} className="group block">
               <div
                 aria-hidden="true"
                 className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
               >
                 <img
                   src={collection.imageSrc}
                   alt={collection.imageAlt}
                   className="w-full h-full object-center object-cover"
                 />
               </div>
               <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
               <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
             </a>
           ))}
         </div>
       </section>

       {/* Featured section */}
       <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
         <div className="relative rounded-lg overflow-hidden">
           <div className="absolute inset-0">
             <img
               src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
               alt=""
               className="w-full h-full object-center object-cover"
             />
           </div>
           <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
             <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
               <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                 Simple productivity
               </h2>
               <p className="mt-3 text-xl text-white">
                 Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best
                 here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                 undeniable urge to fill empty circles.
               </p>
               <a
                 href="#"
                 className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
               >
                 Shop Focus
               </a>
             </div>
           </div>
         </div>
       </section>
     </main>

     <footer aria-labelledby="footer-heading" className="bg-gray-900">
       <h2 id="footer-heading" className="sr-only">
         Footer
       </h2>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
           <div className="grid grid-cols-2 gap-8 xl:col-span-2">
             <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
               <div>
                 <h3 className="text-sm font-medium text-white">Shop</h3>
                 <ul role="list" className="mt-6 space-y-6">
                   {footerNavigation.shop.map((item) => (
                     <li key={item.name} className="text-sm">
                       <a href={item.href} className="text-gray-300 hover:text-white">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                 <h3 className="text-sm font-medium text-white">Company</h3>
                 <ul role="list" className="mt-6 space-y-6">
                   {footerNavigation.company.map((item) => (
                     <li key={item.name} className="text-sm">
                       <a href={item.href} className="text-gray-300 hover:text-white">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
             <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
               <div>
                 <h3 className="text-sm font-medium text-white">Account</h3>
                 <ul role="list" className="mt-6 space-y-6">
                   {footerNavigation.account.map((item) => (
                     <li key={item.name} className="text-sm">
                       <a href={item.href} className="text-gray-300 hover:text-white">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                 <h3 className="text-sm font-medium text-white">Connect</h3>
                 <ul role="list" className="mt-6 space-y-6">
                   {footerNavigation.connect.map((item) => (
                     <li key={item.name} className="text-sm">
                       <a href={item.href} className="text-gray-300 hover:text-white">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           </div>
           <div className="mt-12 md:mt-16 xl:mt-0">
             <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
             <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
             <form className="mt-2 flex sm:max-w-md">
               <label htmlFor="email-address" className="sr-only">
                 Email address
               </label>
               <input
                 id="email-address"
                 type="text"
                 autoComplete="email"
                 required
                 className="appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
               />
               <div className="ml-4 flex-shrink-0">
                 <button
                   type="submit"
                   className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                 >
                   Sign up
                 </button>
               </div>
             </form>
           </div>
         </div>

         <div className="border-t border-gray-800 py-10">
           <p className="text-sm text-gray-400">Copyright &copy; 2021 Clothing Company Inc.</p>
         </div>
       </div>
     </footer>
   </div>
  )
}; 

export default App;