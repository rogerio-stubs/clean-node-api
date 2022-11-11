import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    // eslint-disable-next-line no-useless-catch
    try {
      if (!httpRequest.body.name) {
        return badRequest(new MissingParamError('name'))
      }

      if (!httpRequest.body.email) {
        return badRequest(new MissingParamError('email'))
      }
    } catch (error) {
      throw (error)
    }
  }
}
