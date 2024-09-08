import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 shadow-md">
      <div className="p-6">
        <Image 
          src="/dashboard/patito-hule.png"
          alt="Logo"
          width={80}
          height={80}
        />
        <h2 className="mt-6 text-xl font-semibold">Usuario logeado</h2>
        <p className="text-gray-400">Rol desempeñado</p>
      </div>
      <nav className="mt-10">
        {/* LINKS TO NAVEGATE IN THE APP */}
        <NavLinks />
      </nav>
    </aside>
  );
}