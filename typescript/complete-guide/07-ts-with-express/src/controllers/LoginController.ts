import { Request, Response } from 'express'
import { get, controller, post, bodyValidator } from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
   <form method="POST">
     <div>
       <label> Email </label> 
       <input  name="email" /> 
     </div> 
     <div> 
        <label> Password </label> 
        <input  type="password"  name="password" /> 
     </div>
     <button>Submit</button> 
  </form>`)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body

    if (email && password && email == 'hi@test.com' && password == 'password') {
      // we have not to extend the session type declaration and correct it, because it is will implemented
      req.session = { isLoggedIn: true }
      res.redirect('/')
    } else {
      res.send('invalid email or password')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
