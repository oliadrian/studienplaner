import { useState, useEffect } from "react";
import { getModules, createModule, updateModule } from "../supabase/database";
import { Module, CreateModuleData } from "../types";

export function useModules(studyProgramId?: string) {
    const [modules, setModules] = useState<Module[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchModules = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await getModules(studyProgramId)
            setModules(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchModules()
    }, [studyProgramId])

    const createNewModule = async (moduleData: CreateModuleData) => {
        try {
            const newModule = await createModule(moduleData)
            setModules(prev => [newModule, ...prev])
            return newModule
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            throw err
        }
    }

    const updateExistingModule = async (id: string, updates: Partial<Module>) => {
        try {
            const updatedModule = await updateModule(id, updates)
            setModules(prev => prev.map(module => 
            module.id === id ? updatedModule : module
            ))
            return updatedModule
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            throw err
        }
    }

    return {
        modules,
        loading,
        error,
        refresh: fetchModules,
        createModule: createNewModule,
        updateModule: updateExistingModule
    }
}