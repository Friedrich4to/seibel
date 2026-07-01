import { onRequestPost as __api_newsletter_ts_onRequestPost } from "C:\\Users\\frede\\Documents\\Clientes\\1_Websites\\SeibelHenriquez\\seibel\\functions\\api\\newsletter.ts"
import { onRequest as ___middleware_ts_onRequest } from "C:\\Users\\frede\\Documents\\Clientes\\1_Websites\\SeibelHenriquez\\seibel\\functions\\_middleware.ts"

export const routes = [
    {
      routePath: "/api/newsletter",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_newsletter_ts_onRequestPost],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_ts_onRequest],
      modules: [],
    },
  ]