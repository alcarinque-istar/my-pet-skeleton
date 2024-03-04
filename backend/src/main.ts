import { setupServer } from "./express/server"

export const start = async () => {
    await setupServer();
}