import { StudyProgram, Module, SemesterPlan, ScheduleEntry } from '@/lib/types';

export const mockStudyPrograms: StudyProgram[] = [
    {
        id: '1',
        name: 'Informatik',
        degree_type: 'Bachelor',
        description: 'Bachelor-Studiengang Informatik mit Fokus auf Softwareentwicklung',
        created_at: '2024-01-01T10:00:00Z',
        updated_at: '2024-01-01T10:00:00Z'
    }
];


export const mockModules: Module[] = [
    {
      id: '1',
      study_program_id: '1',
      name: 'Informatik I',
      module_code: 'B.Inf.1101',
      ects: 10,
      description: 'Einführung in die Programmierung mit Java',
      professor: 'Dr. Brosenne',
      semester_type: 'winter',
      created_at: '2024-01-01T10:00:00Z',
      updated_at: '2024-01-01T10:00:00Z'
    },
    {
      id: '2',
      study_program_id: '1',
      name: 'Informatik II',
      module_code: 'B.Inf.1102',
      ects: 10,
      description: 'Fortgeschrittene Algorithmen und Datenstrukturen',
      semester_type: 'sommer',
      created_at: '2024-01-01T10:00:00Z',
      updated_at: '2024-01-01T10:00:00Z'
    },
    {
      id: '3',
      study_program_id: '1',
      name: 'Mathematik I',
      module_code: 'B.Mat.0801',
      ects: 9,
      description: 'Grundlagen der Mathematik für Informatiker',
      professor: 'Prof. Dr. Wald',
      semester_type: 'winter',
      created_at: '2024-01-01T10:00:00Z',
      updated_at: '2024-01-01T10:00:00Z'
    }
];
  