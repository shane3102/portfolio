export var workPeriods: TimelinePeriod[] = [
    { from: new Date(2021, 6, 1), to: new Date(2021, 9, 30), logo: "/logos/work-and-education/envelo.svg" },
    { from: new Date(2021, 10, 1), to: new Date(2023, 9, 30), logo: "/logos/work-and-education/envelo.svg" },
    { from: new Date(2023, 10, 1), logo: "/logos/work-and-education/envelo.svg" }
]

export var educationPeriods: TimelinePeriod[] = [
    { from: new Date(2019, 9, 1), to: new Date(2023, 5, 20), logo: "/logos/work-and-education/SGGW.svg" }
]

export interface TimelinePeriod {
    from: Date,
    to?: Date,
    logo: string
}