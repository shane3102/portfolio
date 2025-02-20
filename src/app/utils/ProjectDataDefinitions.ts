import { project } from "./GlobalDefinitions"

export class ProjectDataDefinitions {
    static projectDataDefinitions: Map<project, LinkInfo[]> = new Map(
        [
            ['illchess', [{link: 'https://illchess.shane3102.pl/#/', title: 'Aplikacja'}, {link: 'https://github.com/shane3102/illchess', title: 'Repozytorium'}]]
        ]
    )

    static getLinksPerProject(projectName: project): LinkInfo[] {
        let result = this.projectDataDefinitions.get(projectName)
        return  result ? result : [] 
    }
}


export interface LinkInfo {
    link: string,
    title: string
}