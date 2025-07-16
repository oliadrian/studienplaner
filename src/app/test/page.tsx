'use client'

import { useStudyPrograms } from '@/lib/hooks/useStudyPrograms'
import { useModules } from '@/lib/hooks/useModules'

export default function TestPage() {
  const { programs, loading: programsLoading, error: programsError } = useStudyPrograms()
  const { modules, loading: modulesLoading, error: modulesError } = useModules()

  if (programsLoading || modulesLoading) {
    return <div className="p-8">Loading...</div>
  }

  if (programsError || modulesError) {
    return (
      <div className="p-8 text-red-600">
        Error: {programsError || modulesError}
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Database Test</h1>
      
      {/* Study Programs */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Study Programs ({programs.length})</h2>
        <div className="grid gap-4">
          {programs.map(program => (
            <div key={program.id} className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold">{program.name}</h3>
              <p className="text-sm text-gray-600">{program.degree_type}</p>
              {program.description && (
                <p className="text-sm mt-2">{program.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Modules ({modules.length})</h2>
        <div className="grid gap-4">
          {modules.map(module => (
            <div key={module.id} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{module.name}</h3>
                  {module.module_code && (
                    <p className="text-sm text-gray-600">{module.module_code}</p>
                  )}
                  <p className="text-sm text-gray-600">{module.ects_points} ECTS</p>
                  {module.professor && (
                    <p className="text-sm text-gray-600">{module.professor}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    module.is_completed 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {module.is_completed ? 'Bestanden' : 'Offen'}
                  </span>
                  {module.is_completed && module.grade && (
                    <p className="text-sm font-semibold mt-1">Note: {module.grade}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raw Data for debugging */}
      <details className="mt-8">
        <summary className="cursor-pointer font-semibold">Raw Data (Debug)</summary>
        <div className="mt-4 bg-gray-100 p-4 rounded overflow-auto">
          <h3 className="font-semibold mb-2">Programs:</h3>
          <pre className="text-xs mb-4">{JSON.stringify(programs, null, 2)}</pre>
          
          <h3 className="font-semibold mb-2">Modules:</h3>
          <pre className="text-xs">{JSON.stringify(modules, null, 2)}</pre>
        </div>
      </details>
    </div>
  )
}