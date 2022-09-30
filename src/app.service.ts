import { Injectable, BadRequestException } from '@nestjs/common'
import * as jsonld from 'jsonld'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  async normalize(doc: object): Promise<string> {
    try {
      const canonized: string = await jsonld.canonize(doc, {
        algorithm: 'URDNA2015',
        format: 'application/n-quads',
        safe: false
      })

      if (canonized === '') throw new Error()

      return canonized
    } catch (error) {
      console.error(error)
      throw new BadRequestException('Provided input is not a valid Self Description.')
    }
  }
}
