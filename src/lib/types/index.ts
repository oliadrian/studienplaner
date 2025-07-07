export interface StudyProgram {
    id: string;
    name: string;
    degree_type: 'Bachelor' | 'Master';
    description?: string;
    created_at: string;
    updated_at: string;
}

export interface Module {
    id: string;
    study_program_id: string;
    name: string;
    module_code?: string;
    ects: number;
    description?: string;
    professor?: string;
    semester_type?: 'winter' | 'sommer' | 'beide';
    grade?: number;
    created_at: string;
    updated_at: string;
}

export interface SemesterPlan {
    id: string;
    study_program_id: string;
    semester_number: number;
    semester_type: 'winter' | 'sommer';
    year: string;
    created_at: string;
}

export interface SemesterModule {
    id: string;
    semester_plan_id: string;
    module_id: string;
    status: 'geplant' | 'abgeschlossen';
    created_at: string;
}

export interface ScheduleEntry {
    id: string;
    module_id: string;
    semester_plan_id?: string;
    day_of_week: number; // 0=Sonntag, 1=Montag, etc.
    start_time: string; // "09:00"
    end_time: string; // "10:30"
    room?: string;
    event_type: 'vorlesung' | 'seminar' | 'uebung';
    created_at: string;
}

// Form Types
export interface CreateStudyProgramData {
    name: string;
    degree_type: 'Bachelor' | 'Master';
    description?: string;
}
  
export interface CreateModuleData {
    study_program_id: string;
    name: string;
    module_code?: string;
    ects_points: number;
    description?: string;
    professor?: string;
    semester_type: 'winter' | 'sommer' | 'beide';
    grade?: number;
}
  
export interface CreateScheduleEntryData {
    module_id: string;
    day_of_week: number;
    start_time: string;
    end_time: string;
    room?: string;
    event_type: 'vorlesung' | 'seminar' | 'uebung';
    is_recurring: boolean;
}