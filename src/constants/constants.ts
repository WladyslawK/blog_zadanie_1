import {PATH} from "./routePaths.enum";

export const navConstants: navConstantsType  = [
  {id: 1, name: 'stron główna', route: PATH.MAIN},
  {id: 2, name: 'o mnie', route: PATH.ABOUT_ME},
  {id: 3, name: 'blog', route: PATH.BLOG}
]


type navConstantsType = Array<{id: number, name: string, route: string}>