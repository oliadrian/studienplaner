import type { Module } from "../types";

export function calculateWeightedGPA(modules: Module[]): number | null {
    // Nur bestandene Module mit Noten berücksichtigen
    const completedModules = modules.filter(module => 
    module.is_completed && 
    module.grade !== null && 
    module.grade !== undefined &&
    module.ects_points > 0
    )
  
    if (completedModules.length === 0) {
        return null // Keine bestandenen Module
    }
  
    let totalWeightedGrades = 0
    let totalCredits = 0
  
    for (const module of completedModules) {
        const grade = module.grade!
        const credits = module.ects_points
    
        totalWeightedGrades += grade * credits
        totalCredits += credits
    }
  
    if (totalCredits === 0) {
        return null // Keine Credits
    }
  
    return totalWeightedGrades / totalCredits
}

export function calculateGPAForProgram(modules: Module[], studyProgramId: string): number | null {
    const programModules = modules.filter(module => module.study_program_id === studyProgramId)
    return calculateWeightedGPA(programModules)
}

export function calculateTotalECTS(modules: Module[], onlyCompleted: boolean = true): number {
    const filteredModules = onlyCompleted ? modules.filter(module => module.is_completed) : modules
  
    return filteredModules.reduce((total, module) => total + module.ects_points, 0)
}

export function formatGrade(grade: number | null | undefined, decimals: number = 2): string {
    if (grade === null || grade === undefined) {
        return '-'
    }
  
    return grade.toFixed(decimals).replace('.', ',')
}
