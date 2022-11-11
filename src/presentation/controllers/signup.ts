import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    // eslint-disable-next-line no-useless-catch
    try {
      const requiredFields = ['name', 'email']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
    } catch (error) {
      throw (error)
    }
  }
}
