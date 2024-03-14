import { Recipe } from "./Recipe";

type Params = {
  bodyUsed: boolean;
  cache: string;
  cookies: {};
  credentials: string;
  destination: string;
  headers: {};
  id: string;
  integrity: string;
  keepalive: boolean;
  method: string;
  mode: string;
  params: {};
  redirect: string;
  referrer: string;
  referrerPolicy: string;
  url: string;
};

export type Cocktails = {
  data: Recipe[];
  limit: number;
  offset: number;
  params: Params;
  total: number;
};
