'use client'
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
import { useStudyPrograms } from '@/lib/hooks/useStudyPrograms'
import { useModules } from '@/lib/hooks/useModules'
import { calculateWeightedGPA, formatGrade, calculateTotalECTS } from '@/lib/utils/functions'
import { useState } from 'react';


function DashboardPage() {

  let zeitplan = [
    {
      id: 1,
      modul: "Info I",
      uhrzeit: "14:15"
    },
    {
      id: 2,
      modul: "Mafia I",
      uhrzeit: "10:15"
    },
    {
      id: 3,
      modul: "Rust",
      uhrzeit: "16:15"
    }
  ]

  const { programs, loading: programsLoading, error: programsError } = useStudyPrograms()
  const { modules, loading: modulesLoading, error: modulesError } = useModules()
  
  if (modulesLoading) return <div>Loading...</div>

  const grade = calculateWeightedGPA(modules)
  const totalECTS = calculateTotalECTS(modules)
  const progressPercentage = (totalECTS / 180) * 100

  return ( 
      <main className='py-8 px-10 bg-gray-50 min-h-screen'>
        
        {/** HEADER */}
        <div className='mb-12'>
          <p className='text-4xl'>Willkommen zurück</p>
          <h1 className='pl-4 text-6xl font-heading font-bold'>Oliver Rust</h1>
        </div>

        {/** DASHBOARD CONTAINER */}
        <div className='grid grid-cols-2 gap-4'>
          
          <DashboardContainer title='Studienverlauf' subtitle='So sieht es derzeit bei Deinem Studium aus' icon='📈'>
            <div>
              <h1 className='font-bold font-heading'>Studienfach: {programs[0].name}</h1>
              <div className='mt-2'>
                <p className='font-bold'>Credits</p>
                <div className='flex items-center gap-3'>
                  <div className='w-1/2 bg-gray-200 rounded-full h-2 overflow-hidden'>
                    <div className='h-full bg-orange-500 rounded-full transition-all duration-700 ease-out' style={{ width: `${progressPercentage}%` }}/>
                  </div>
                  <p className='text-sm'>({totalECTS} / 180)</p>
                </div>
                <div className='mt-2'>
                  <p>Note: <span className='font-bold'>{grade ? formatGrade(grade) : 'Keine Noten'}</span></p>
                </div>
              </div>
            </div>
          </DashboardContainer>
          
          <DashboardContainer title='Termine' subtitle='Das hast Du heute vor' className='row-span-2' icon='📅'>
            <div>
            {zeitplan.map((item) => (
              <div key={item.id} className='flex justify-between'>
                <p>{item.modul}</p>
                <p>{item.uhrzeit}</p>
              </div>
            ))}
            </div>
          </DashboardContainer>
          
          <DashboardContainer title='TestContainer' subtitle='bla bla bla'>
            Test
          </DashboardContainer>
        </div>
      </main>
  );
}

export default DashboardPage;