export const DEGREE_TYPES = [
    { value: 'Bachelor', label: 'Bachelor' },
    { value: 'Master', label: 'Master' }
] as const;

export const SEMESTER_TYPES = [
    { value: 'winter', label: 'Wintersemester'},
    { value: 'sommer', label: 'Sommersemester'},
    { value: 'beide', label: 'Beide Semester'}
] as const;

export const EVENT_TYPES = [
    { value: 'vorlesung', label: 'Vorlesung', color: 'bg-blue-500' },
    { value: 'seminar', label: 'Seminar', color: 'bg-green-500' },
    { value: 'uebung', label: 'Übung', color: 'bg-yellow-500' }
] as const;

export const DAYS_OF_WEEK = [
    { value: 0, label: 'Sonntag', short: 'So' },
    { value: 1, label: 'Montag', short: 'Mo' },
    { value: 2, label: 'Dienstag', short: 'Di' },
    { value: 3, label: 'Mittwoch', short: 'Mi' },
    { value: 4, label: 'Donnerstag', short: 'Do' },
    { value: 5, label: 'Freitag', short: 'Fr' },
    { value: 6, label: 'Samstag', short: 'Sa' }
] as const;

export const TIME_SLOTS = Array.from({ length: 15 }, (_, i) => {
    const hour = 7 + i;
    return {
      value: `${hour.toString().padStart(2, '0')}:00`,
      label: `${hour.toString().padStart(2, '0')}:00`
    };
});