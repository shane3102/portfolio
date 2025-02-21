import { project, technology } from "./GlobalDefinitions"

export class ProjectDataDefinitions {

    static projectDataDefinitions: Map<project, ProjectInfo> = new Map(
        [
            [
                'illchess',
                {
                    name: 'illchess',
                    technologies: ['Kotlin', 'Java', 'Spring Boot', 'Quarkus', 'RabbitMQ', 'Redis', 'MySql', 'Angular', 'Typescript'],
                    links: [
                        {link: 'https://illchess.shane3102.pl/#/', title: 'Aplikacja'}, 
                        {link: 'https://github.com/shane3102/illchess', title: 'Repozytorium'}
                    ]
                }
            ],
            [
                'inbox-outbox',
                {
                    name: 'inbox-outbox',
                    technologies: ['Kotlin', 'Spring Boot', 'Quarkus'],
                    links: [
                        {link: 'https://nexus.shane3102.pl/#browse/search=keyword%3Dinbox-outbox', title: 'Nexus'},
                        {link: 'https://github.com/shane3102/inbox-outbox', title: 'Repozytorium'}
                    ]
                }
            ],
            [
                'leon',
                {
                    name: 'leon',
                    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Typescript'],
                    links: [
                        {link: 'https://leon.shane3102.pl/#/', title: 'Aplikacja'}, 
                        {link: 'https://github.com/shane3102/leon', title: 'Repozytorium'}, 
                        {link: 'https://1drv.ms/w/c/949d02daf155b598/EZi1VfHaAp0ggJRlPgAAAAABo0WrTtognRQzs6EWqw889w?e=Rdcy6d', title: 'Praca Inżynierska'}
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
    technologies: technology[]
    links: LinkInfo[]
}

export interface LinkInfo {
    link: string,
    title: string
}