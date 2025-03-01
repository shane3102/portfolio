export var workPeriods: TimelinePeriod[] = [
    {
        from: new Date(2021, 7, 9),
        to: new Date(2021, 9, 31),
        logo: "/logos/work-and-education/envelo.svg",
        title: "Akademia envelo (staż)",
    },
    {
        from: new Date(2021, 10, 1),
        to: new Date(2023, 9, 31),
        logo: "/logos/work-and-education/envelo.svg",
        title: "Młodszy specjalista ds. rozwoju oprogramowania",
    },
    {
        from: new Date(2023, 10, 1),
        logo: "/logos/work-and-education/envelo.svg",
        title: "Specjalista ds. rozwoju oprogramowania",
    }
]

export var educationPeriods: TimelinePeriod[] = [
    {
        from: new Date(2019, 9, 1),
        to: new Date(2023, 4, 1),
        logo: "/logos/work-and-education/SGGW.svg",
        title: "Studia inż. (ocena końcowa: 5.0)",
    }
]

export interface TimelinePeriod {
    from: Date,
    to?: Date,
    logo: string,
    title?: string
}