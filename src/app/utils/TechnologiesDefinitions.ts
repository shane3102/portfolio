import { technology } from "./GlobalDefinitions"

export class TechnologiesDefinitions {
    static technologiesDefinitions: Map<technology, TechnologyInfo> = new Map(
        [
            // Language
            ["Java", { logo: "/logos/java.svg", link: "https://www.java.com/pl/" }],
            ["Kotlin", { logo: "/logos/kotlin.svg", link: "https://kotlinlang.org/" }],
            ["Typescript", { logo: "/logos/typescript.svg", link: "https://www.typescriptlang.org/" }],

            // Framework
            ["Angular", { logo: "/logos/angular.svg", link: "https://angular.dev/" }],
            ["Spring Boot", { logo: "/logos/spring.svg", link: "https://spring.io/projects/spring-boot" }],
            ["Quarkus", { logo: "/logos/quarkus.svg", link: "https://quarkus.io/" }],

            // Other
            ["PostgreSQL", { logo: "/logos/postgresql.svg", link: "https://www.postgresql.org/" }],
            ["MySql", { logo: "/logos/mysql.svg", link: "https://www.mysql.com/" }],
            ["Redis", { logo: "/logos/redis.svg", link: "https://redis.io/" }],
            ["RabbitMQ", { logo: "/logos/rabbitmq.svg", link: "https://www.rabbitmq.com/" }],
        ]
    )

    public static getSvgByTechnology(technology: technology | undefined) {
        return technology ? this.technologiesDefinitions.get(technology)?.logo : undefined
    }

    public static getLinkByTechnology(technology: technology | undefined) {
        return technology ? this.technologiesDefinitions.get(technology)?.link : undefined
    }
}

interface TechnologyInfo {
    logo: string,
    link: string
}