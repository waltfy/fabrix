// tslint:disable no-unused-expression

import { FabrixApp } from '../index'
import { EventEmitter } from 'events'
// import { enumerable, writable } from './'
import { FabrixGeneric } from './Generic'

/**
 * Fabrix Policy Class.
 */
export class FabrixPolicy extends FabrixGeneric {
  public app: FabrixApp


  /**
   * Policy configuration
   */
  static config () {
  }

  constructor (app: FabrixApp) {
    super(app)

    if (!(app instanceof EventEmitter)) {
      throw new Error('The "app" argument must be of type EventEmitter')
    }
    this.app.emit(`policy:${this.id}:constructed`, this)
  }

  get __ () {
    if (this.app.__) {
      return this.app.__
    }
    else {
      throw new Error('Missing spool-i18n, make sure it is included in app.main.spools')
    }
  }

  /**
   * Return the id of this policy
   */
  get id (): string {
    return this.constructor.name.replace(/(\w+)Policy/, '$1').toLowerCase()
  }

  /**
   * Return a reference to the Fabrix logger
   */
  get log (): FabrixApp['log'] {
    return this.app.log
  }

  /**
   * Return a reference to the Fabrix configuration map.
   */
  get config (): FabrixApp['config'] {
    return this.app.config
  }

  get services (): FabrixApp['services'] {
    return this.app.services
  }
}
