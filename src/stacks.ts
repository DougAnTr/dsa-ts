class Stack {
  #items: any = {}
  #count = 0

  push(element: any) {
    this.#items[this.#count] = element;
    this.#count++
  }

  size(){
    return this.#count
  }

  isEmpty() {
    return this.#count === 0
  }

  pop() {
    if(this.isEmpty()){
      return undefined
    }

    this.#count--
    const result = this.#items[this.#count]
    delete this.#items[this.#count]

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.#items[this.#count - 1]
  }

  clear() {
    this.#items = {}
    this.#count = 0
  }

  toString(){
    if(this.isEmpty()){
      return undefined
    }

    let objString = `${this.#items[0]}`

    for(let i = 1; i < this.#count; i++){
      objString = `${objString}, ${this.#items[i]}`
    }
    return objString
  }
}

/**
 * Converting decimal numbers to binary
 */
function baseConverter(decNumber: number, base: number){
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let baseString = ''

  if(!(base >= 2 && base <= 36)){
    return ''
  }

  while(number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  
  while(!remStack.isEmpty()){    
    baseString += digits[remStack.pop()]  
  }
  
  return baseString
}

console.log(baseConverter(100, 2));
console.log(baseConverter(2, 2));
console.log(baseConverter(200, 8));
console.log(baseConverter(255, 16));
