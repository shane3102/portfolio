export var periods: TimelinePeriod[] = [
    { from: new Date(2021, 6, 1), to: new Date(2021, 9, 30) },
    { from: new Date(2021, 10, 1), to: new Date(2023, 9, 30) },
    { from: new Date(2023, 10, 1)}
]

export interface TimelinePeriod {
    from: Date,
    to?: Date,
}