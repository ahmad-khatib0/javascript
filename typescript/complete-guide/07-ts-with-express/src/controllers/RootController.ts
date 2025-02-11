import { NextFunction, Request, Response } from 'express'
import { get, controller, use } from './decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('not permitted')
}

@controller('') // prevent having tow slashes
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    // this left check is a type guard, in order to access isLoggedIn in the right check
    if (req.session && req.session.isLoggedIn) {
      res.send(`
       <div> 
           <div> You are logged in </div> 
           <a  href="/auth/logout"> Logout </a>  
       </div> 
    `)
    } else {
      res.send(`
    <div> 
         <div> You are not logged in </div> 
         <a href="/auth/login"> Login </a> 
    </div> 
   `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('welcome to protected route, logged in user')
  }
}
