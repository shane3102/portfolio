import { project, technology } from "./GlobalDefinitions"

export class ProjectDataDefinitions {

    static projectDataDefinitions: Map<project, ProjectInfo> = new Map(
        [
            [
                'illchess',
                {
                    name: 'illchess',
                    shortDescription: 'Aplikacja do grania w szachy online. Charaktryzuje się zastosowaniem architektury mikroserwisowej (heksagonalnej), DDD oraz CQRS.',
                    technologies: ['Kotlin', 'Java', 'Spring Boot', 'Quarkus', 'RabbitMQ', 'Redis', 'MySql', 'Docker', 'Angular', 'Typescript'],
                    links: [
                        { link: 'https://illchess.shane3102.pl/#/', title: 'Aplikacja' },
                        { link: 'https://github.com/shane3102/illchess', title: 'Repozytorium' }
                    ]
                }
            ],
            [
                'inbox-outbox',
                {
                    name: 'inbox-outbox',
                    shortDescription: 'Biblioteka wspierająca implementacje wzorca inbox lub outbox. Posiada wersje dla frameworków Spring Boot i Quarkus.',
                    technologies: ['Kotlin', 'Spring Boot', 'Quarkus'],
                    links: [
                        { link: 'https://github.com/shane3102/inbox-outbox', title: 'Repozytorium' },
                        { link: 'https://reposilite.shane3102.pl/#/releases/pl/shane3102/messaging', title: 'Artefakty (Reposilite)' }
                    ]
                }
            ],
            [
                'leon',
                {
                    name: 'leon',
                    shortDescription: 'Aplikacja ankietowa ze zmienną prezentacją pytań. Projekt wykonywany w ramach pracy dyplomowej. Posiada prostą, monolityczną architekturę.',
                    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Angular', 'Typescript'],
                    links: [
                        { link: 'https://leon.shane3102.pl/#/', title: 'Aplikacja' },
                        { link: 'https://github.com/shane3102/leon', title: 'Repozytorium' },
                        { link: 'https://1drv.ms/w/c/949d02daf155b598/EZi1VfHaAp0ggJRlPgAAAAABo0WrTtognRQzs6EWqw889w?e=Rdcy6d', title: 'Praca Inżynierska' }
                    ]
                }
            ]
        ]
    )

    static getProjectDataDefinition(projectName: project): ProjectInfo | undefined {
        return this.projectDataDefinitions.get(projectName)
    }
}

export interface ProjectInfo {
    name: project,
    shortDescription: string,
    technologies: technology[]
    links: LinkInfo[]
}

export interface LinkInfo {
    link: string,
    title: string
}