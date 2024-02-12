import { appRouter } from "./routers/_app";
import { getServerAuthSession } from "@/server/auth";
import { Context, createCallerFactory } from "./trpc";

export const createContext = async (): Promise<Context> => {
  const session = await getServerAuthSession();
  return {
    user: session?.user ?? null,
  };
};

const createCaller = createCallerFactory(appRouter);

export const api = createCaller(createContext);
