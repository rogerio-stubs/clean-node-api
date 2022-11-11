import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    // eslint-disable-next-line no-useless-catch
    try {
      if (!httpRequest.body.name) {
        return {
          statusCode: 400,
          body: new MissingParamError('name')
        }
      }

      if (!httpRequest.body.email) {
        return {
          statusCode: 400,
          body: new MissingParamError('email')
        }
      }
    } catch (error) {
      throw (error)
    }
  }
}
