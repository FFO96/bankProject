export const configLoader = ()=> {
    return {
        app_port: process.env.APP_PORT,
        database: {
            host: process.env.DATABASE_HOST,
            name: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            port: process.env.DATABASE_PORT,
        }
    }
}