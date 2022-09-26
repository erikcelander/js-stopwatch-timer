export class Timer {

  #ms
  #seconds
  #minutes
  #hours
  #days
  #timer

  constructor () {
    this.#seconds = 0
    this.#minutes = 0
    this.#hours = 0
    this.#days = 0
    this.#timer
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

  #isPositiveInteger = (int) => {
    if (typeof int === 'number' && int > 0) {
      return true
    } else {
      return false
    }
  }

  #validateTimer = (func, time) => {
    if (func instanceof Function && this.#isPositiveInteger(time)) {
      return true
    } else {
      return false
    }
  }

  start = () => {
    try {
      this.#setTimer(this.#count, 1000)
    } catch (error) {
      console.log(error.message)
    }
  }


  #count = () => {
    this.#setSeconds(this.#getSeconds() + 1)
    this.#updateTime()
  }

  #updateTime = () => {
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
    this.#setSeconds(0)
    this.#setMinutes(0)
    this.#setHours(0)
    this.#setDays(0)
  }

  log = () => {
    let text = ''

    if (this.#getMinutes() === 0) {
      text = `${this.#getSeconds()}s`
    } 

    if (this.#getMinutes() > 0) {
      text = `${this.#getMinutes()}m ${this.#getSeconds()}s`
    }

    if (this.#getHours() > 0) {
      text = `${this.#getHours()}hr ${this.#getMinutes()}m ${this.#getSeconds()}s`
    }

    if (this.#getDays() > 0) {
      text = `${this.#getDays()}days ${this.#getHours()}hrs ${this.#getMinutes()}m ${this.#getSeconds()}s`
    }

    console.log(text)
  }

  lap = () => {
    const lap = {
      seconds: this.#getSeconds(),
      minutes: this.#getMinutes(),
      hours: this.#getHours(),
      days: this.#getDays()
    }
    return lap
  }


  #remove = () => {
    this.#setSeconds(this.#getSeconds() - 1)

    if (this.#getSeconds() === 0) {
      this.reset()
    }
  }

  countdown = (seconds) => {
    this.reset()

    if (this.#isPositiveInteger(seconds)) {
      
      this.#setSeconds(seconds)
      this.#setTimer(this.#remove, 1000)

    } else {
      throw new Error('Seconds to countdown needs to be a positive integer.')
    }
  }
}

const timer = new Timer()
timer.start()