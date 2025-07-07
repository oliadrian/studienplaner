'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  ClipboardDocumentListIcon,
  FolderIcon,
  ChartBarIcon,
  CogIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import path from 'path';

interface SidebarProps {
  className?: string;
}

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Module', href: '/dashboard/modules', icon: BookOpenIcon },
    { name: 'Stundenplan', href: '/dashboard/schedule', icon: CalendarIcon },
    { name: 'Semesterplanung', href: '/dashboard/semester-planning', icon: ClipboardDocumentListIcon },
    { name: 'Statistiken', href: '/dashboard/stats', icon: ChartBarIcon },
]


function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname == href || pathname.startsWith(href + "/")
    }

    return ( 
        <div className={`w-64 border-r border-gray-200 flex flex-col bg-purple-800 text-stone-50 ${className}`}>
            
            {/* HEADER */}
            <div className='w-full p-4'>
                <h1 className='text-lg'>STUDIENPLANER</h1>
                <p className='text-xs'>Deine Studienorganisation</p>
            </div>

            {/* NAVIGATION */}
            <nav className='flex-1 px-4 py-6'>
                <div className='space-y-8'>
                    {navigation.map((item) => {
                        const isItemActive = isActive(item.href)

                        return (
                            <Link key={item.name} href={item.href} className={`group flex mx-4 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isItemActive ? 'bg-purple-500 text-stone-200 border-r-2 border-purple-900' : 'hover:bg-purple-500 hover:text-stone-200'}`}> 
                                <item.icon className={`mr-3 h-5 w-5 transition-colors ${isItemActive ? '' : 'group-hover:text-stone-200'}`}/>
                                {item.name} 
                            </Link>
                        )
                    })}
                </div>
            </nav>
            {/* Bottom Navigation - Icon Only mit justify-between */}
            <div className="p-4">
                <div className="flex items-center justify-between">
                {/* Settings Icon */}
                <Link href="/dashboard/settings" className={`p-1 rounded-full transition-colors ${isActive('/dashboard/settings') ? '' : 'hover:text-stone-200 hover:bg-purple-500'}`} title="Einstellungen">
                    <CogIcon className="h-6 w-6" />
                </Link>

                {/* Profile Icon */}
                <Link href="/dashboard/profile" className={`p-1 rounded-full transition-colors ${isActive('/dashboard/profile') ? '' : 'hover:text-stone-200 hover:bg-purple-500'}`} title="Profil">
                    <UserCircleIcon className="h-6 w-6" />
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;