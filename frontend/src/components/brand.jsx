/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from '@heroicons/react/solid'

const projects = [
  { name: 'APPLE', initials: 'logo', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'SAMSUNG', initials: 'logo', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'XAOMI', initials: 'logo', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'NOKIA', initials: 'logo', href: '#', members: 8, bgColor: 'bg-green-500' },
]

const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Brand = () => {
  return (
    // <div>
    //   <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
    //   <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
    //     {projects.map((project) => (
    //       <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
    //         <div
    //           className={classNames(
    //             project.bgColor,
    //             'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
    //           )}
    //         >
    //           {project.initials}
    //         </div>
    //         <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
    //           <div className="flex-1 px-4 py-2 text-sm truncate">
    //             <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
    //               {project.name}
    //             </a>
    //             <p className="text-gray-500">{project.members} Members</p>
    //           </div>
    //           <div className="flex-shrink-0 pr-2">
    //             <button
    //               type="button"
    //               className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //             >
    //               <span className="sr-only">Open options</span>
    //               <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
    //             </button>
    //           </div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
      <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
        Shop by Category
      </h2>
      <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
        Browse all categories<span aria-hidden="true"> &rarr;</span>
      </a>
    </div>

    <div className="mt-4 flow-root">
      <div className="-my-2">
        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
          <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 px-4 sm:hidden">
      <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
        Browse all categories<span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </section>
  )
}

export default Brand;