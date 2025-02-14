export class TechnologiesDefinitions {
    static technologiesDefinitions: Map<string, string> = new Map(
        [
            // Language
            ["Java", "/logos/java.svg"],
            ["Kotlin", "/logos/kotlin.svg"],
            ["Typescript", "/logos/typescript.svg"],

            // Framework
            ["Angular", "/logos/angular.svg"],
            ["Spring", "/logos/spring.svg"],
            ["Quarkus", "/logos/quarkus.svg"],

            // Other
            ["PostgreSQL", "/logos/postgresql.svg"],
            ["MySql", "/logos/mysql.svg"],
            ["Redis", "/logos/redis.svg"],
            ["RabbitMQ", "/logos/rabbitmq.svg"],
        ]
    )

    public static getSvgByTechnology(technology: string | undefined) {
        return technology ? this.technologiesDefinitions.get(technology) : undefined
    }
}