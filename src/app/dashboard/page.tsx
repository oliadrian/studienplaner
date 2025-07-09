import { 
    BookOpenIcon, 
    CalendarIcon, 
    ClockIcon,
    AcademicCapIcon,
    ChartBarIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    ArrowRightIcon
  } from '@heroicons/react/24/outline'
import Link from 'next/link'
import DashboardContainer from '@/components/dashboard/DashboardContainer';

function DashboardPage() {
    return ( 
        <main className='py-8 px-10 bg-gray-50 min-h-screen'>
          <div className='mb-12'>
            <p className='text-4xl'>Willkommen zurück</p>
            <h1 className='pl-4 text-6xl font-heading font-bold'>Oliver Rust</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <DashboardContainer title='Studienverlauf' subtitle='So sieht es derzeit bei Deinem Studium aus' icon='📈'>
              Test
            </DashboardContainer>
            <DashboardContainer title='Termine' subtitle='Das hast Du heute vor' className='row-span-2' icon='📅'>
              Test
            </DashboardContainer>
            <DashboardContainer title='TestContainer' subtitle='bla bla bla'>
              Test
            </DashboardContainer>
          </div>
        </main>
      );
}

export default DashboardPage;