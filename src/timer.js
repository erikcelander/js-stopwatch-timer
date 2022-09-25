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



}