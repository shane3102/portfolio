import { technology } from "./GlobalDefinitions"

export class TechnologiesDefinitions {
    static technologiesDefinitions: Map<technology, TechnologyInfo> = new Map(
        [
            // Language
            ["Java", { logo: "/logos/technologies/java.svg", link: "https://www.java.com/pl/" }],
            ["Kotlin", { logo: "/logos/technologies/kotlin.svg", link: "https://kotlinlang.org/" }],
            ["Typescript", { logo: "/logos/technologies/typescript.svg", link: "https://www.typescriptlang.org/" }],

            // Framework
            ["Angular", { logo: "/logos/technologies/angular.svg", link: "https://angular.dev/" }],
            ["Spring Boot", { logo: "/logos/technologies/spring.svg", link: "https://spring.io/projects/spring-boot" }],
            ["Quarkus", { logo: "/logos/technologies/quarkus.svg", link: "https://quarkus.io/" }],

            // Other
            ["PostgreSQL", { logo: "/logos/technologies/postgresql.svg", link: "https://www.postgresql.org/" }],
            ["MySql", { logo: "/logos/technologies/mysql.svg", link: "https://www.mysql.com/" }],
            ["Redis", { logo: "/logos/technologies/redis.svg", link: "https://redis.io/" }],
            ["RabbitMQ", { logo: "/logos/technologies/rabbitmq.svg", link: "https://www.rabbitmq.com/" }],
            ["Docker", { logo: "/logos/technologies/docker.svg", link: "https://www.docker.com/" }],
            ["Kafka", { logo: "/logos/technologies/kafka.svg", link: "https://kafka.apache.org/" }],
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