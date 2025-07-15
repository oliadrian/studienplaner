export interface StudyProgram {
    id: string
    user_id: string
    name: string
    degree_type: 'Bachelor' | 'Master'
    description?: string
    created_at: string
    updated_at: string
}

export interface Module {
    id: string
    user_id: string
    study_program_id: string
    name: string
    module_code?: string
    ects_points: number
    description?: string
    professor?: string
    semester_type?: 'winter' | 'summer' | 'both'
    is_completed: boolean
    grade?: number
    created_at: string
    updated_at: string
}

export interface SemesterPlan {
    id: string
    user_id: string
    study_program_id: string
    semester_number: number
    semester_type: 'winter' | 'summer'
    year: number
    created_at: string
}

export interface SemesterModule {
    id: string
    semester_plan_id: string
    module_id: string
    semester_type: 'winter' | 'summer'
    start_year: number
    created_at: string
}

export interface ScheduleEntry {
    id: string
    user_id: string
    module_id: string
    day_of_week: number // 0=Sonntag, 1=Montag, etc.
    start_time: string // "09:00"
    end_time: string // "10:30"
    room?: string
    event_type: 'lecture' | 'seminar' | 'lab' | 'exam'
    is_recurring: boolean
    created_at: string
}

// Form Types
export interface CreateStudyProgramData {
    name: string
    degree_type: 'Bachelor' | 'Master'
    description?: string
}
  
export interface CreateModuleData {
    study_program_id: string
    name: string
    module_code?: string
    ects_points: number
    description?: string
    professor?: string
    semester_type: 'winter' | 'summer' | 'both'
    grade?: number
}
  
export interface CreateScheduleEntryData {
    module_id: string
    day_of_week: number
    start_time: string
    end_time: string
    room?: string
    event_type: 'lecture' | 'seminar' | 'lab' | 'exam'
    is_recurring: boolean
}