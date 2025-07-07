import Sidebar from '@/components/layout/Sidebar'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
    children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return ( 
        <div className='h-screen flex overflow-hidden'>
            <Sidebar />
            
            <main className='flex-1 overflow-auto'>
                {children}
            </main>
        </div>
     );
}

export default DashboardLayout;