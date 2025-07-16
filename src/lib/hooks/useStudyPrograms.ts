import { useState, useEffect } from "react";
import { getStudyPrograms, createStudyProgram } from "../supabase/database";
import type { StudyProgram, CreateStudyProgramData } from "../types";

export function useStudyPrograms() {
    const [programs, setPrograms] = useState<StudyProgram[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchPrograms = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await getStudyPrograms()
            setPrograms(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unkown error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPrograms()
    }, [])

    const createProgram = async (programData: CreateStudyProgramData) => {
        try {
            const newProgram = await createStudyProgram(programData)
            setPrograms(prev => [newProgram, ...prev])
            return newProgram
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")
            throw err
        }
    }

    return {
        programs,
        loading,
        error,
        refresh: fetchPrograms,
        createProgram
    }
}