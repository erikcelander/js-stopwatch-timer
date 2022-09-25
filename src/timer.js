export class Timer {

  #ms
  #seconds
  #minutes
  #hours
  #days
  #timer

  constructor () {
    this.#ms = 0
    this.#seconds = 0
    this.#minutes = 0
    this.#hours = 0
    this.#days = 0
    this.#timer
  }


  #setMs = (value) => {
    this.#ms = value
  }

  #getMs = () => {
    return this.#ms
  }


  #setSeconds = (value) => {
    this.#seconds = value
  }

  #getSeconds = () => {
    return this.#seconds
  }



  #setMinutes = (value) => {
    this.#minutes = value
  }

  #getMinutes = () => {
    return this.#minutes
  }


  #setHours = (value) => {
    this.#hours = value
  }

  #getHours = () => {
    return this.#hours
  }


  #setDays = (value) => {
    this.#days = value
  }

  #getDays = () => {
    return this.#days
  }


  #setTimer = (func, time) => {
    if (this.#validateTimer(func, time)) {
      this.#timer = setInterval(func, time)
    } else {
      throw new Error('Timer validation failed.')
    }
  }

  #getTimer = () => {
    return this.#timer
  }

  #validateTimer = (func, time) => {
    if (func instanceof Function && (typeof time === 'number' && time === 10)) {
      return true
    } else {
      return false
    }
  }

  start = () => {
    try {
      this.#setTimer(this.#countMs, 10)
    } catch (error) {
      console.log(error.message)
    }
  }


  #countMs = () => {
    this.#setMs(this.#getMs() + 1)
    this.#updateTime()
  }

  #updateTime = () => {
    if (this.#getMs() === 100) {
      this.#setSeconds(this.#getSeconds() + 1)
      console.log(this.#getSeconds())
      this.#setMs(0)
    }
  
    if (this.#getSeconds() === 60) {
      this.#setMinutes(this.#getMinutes() + 1)
      this.#setSeconds(0)
    }
  
    if (this.#getMinutes() === 60) {
      this.#setHours(this.#getHours() + 1)
      this.#setMinutes(0)
    }
  
    if (this.#getHours() === 24) {
      this.#setDays(this.#getDays() + 1)
      this.#setHours(0)
    }
  }



  stop = () => {
    clearInterval(this.#getTimer())
  }


  reset = () => {
    this.stop()
    this.#setMs(0)
    this.#setSeconds(0)
    this.#setMinutes(0)
    this.#setHours(0)
    this.#setDays(0)
  }


}