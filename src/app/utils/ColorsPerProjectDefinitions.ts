import { project } from "./GlobalDefinitions"

export class ColorsPerProjectDefinitions {

    static colorDefinitions: Map<project, number[]> =  new Map(
        [
            ['illchess', [150, 75, 0]],
            ['leon', [186, 255, 57]],
            ['inbox-outbox', [173, 216, 230]]
        ]
    )

    public static getColorByProjectByTransparency(
        contentIdentifier: project,
        transparency: number = 1
    ) {
        let foundColorDefinition = this.colorDefinitions.get(contentIdentifier)
        let red = foundColorDefinition? foundColorDefinition[0] : 0
        let green = foundColorDefinition? foundColorDefinition[1] : 0
        let blue = foundColorDefinition? foundColorDefinition[2] : 0
        return `rgba(${red}, ${green}, ${blue}, ${transparency})`
    }
}