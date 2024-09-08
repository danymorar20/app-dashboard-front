// "use client";

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";

// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
// const links = [
//     { name: 'Usuarios', href: '/dashboard/users', icon: HomeIcon },
//   ];

//   export default function NavLinks() {
//     const pathname = usePathname();
   
//     return (
//       <>
//         {links.map((link) => {
//           const LinkIcon = link.icon;
//           return (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={clsx(
//                 'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-black-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//                 {
//                   'bg-sky-100 text-blue-600': pathname === link.href,
//                 },
//               )}
//             >
//               <LinkIcon className="w-6" />
//               <p className="hidden md:block">{link.name}</p>
//             </Link>
//           );
//         })}
//       </>
//     );
//   }
"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: 'Usuarios', href: '/dashboard/users', icon: HomeIcon },
  // Puedes agregar más enlaces aquí
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-200',
              'hover:bg-gray-700 hover:text-white', // Colores para el estado hover
              {
                'bg-gray-700 text-white': pathname === link.href, // Colores para el enlace activo
                'text-gray-400': pathname !== link.href, // Colores para los enlaces inactivos
              }
            )}
          >
            {/* iconos */}
            {/* <LinkIcon className="w-6 text-gray-400" /> */}
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
