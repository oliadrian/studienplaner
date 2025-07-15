import { supabase } from './client'
import { StudyProgram, Module, CreateStudyProgramData, CreateModuleData } from '../types'

// Study Programs
export async function getStudyPrograms(): Promise<StudyProgram[]> {
    const { data, error } = await supabase.from('study_programs').select('*').order('created_at', { ascending: false })

    if (error) {
        console.error("Error fetching study programs: ", error)
        throw error
    }

    return data || [];
}

export async function createStudyProgram(programData:CreateStudyProgramData): Promise<StudyProgram> {
    const { data, error } = await supabase.from('study_programs').insert(programData).select().single()

    if (error) {
        console.error("Error creating study program: ", error)
        throw error
    }

    return data
}

// Modules
export async function getModules(studyProgramId?: string): Promise<Module[]> {
    let query = supabase.from('modules').select('*').order('created_at', { ascending: false })

    if (studyProgramId) {
        query = query.eq('study_program_id', studyProgramId)
    }

    const { data, error } = await query

    if (error) {
        console.error("Error fetching modules: ", error)
        throw error
    }

    return data || []
}

export async function createModule(moduleData: CreateModuleData): Promise<Module> {
    const { data, error } = await supabase.from('modules').insert(moduleData).select().single()

    if (error) {
        console.error("Error creating module: ", error)
        throw error
    }

    return data
}

export async function updateModule(id: string, updates: Partial<Module>): Promise<Module> {
    const { data, error } = await supabase.from('modules').update(updates).eq('id', id).select().single()

    if (error) {
        console.error("Error updating module: ", error)
        throw error
    }

    return data
}