class Queue {
  #count = 0
  #lowestCount = 0
  #items: any = {}

  //Adds a new element to the back of the queue
  enqueue(element: any){
    this.#items[this.#count] = element
    this.#count++
  }

  //Remove and return the first element from the queue
  dequeue(){
    if(this.isEmpty()){
      return undefined
    }

    const result = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]
    this.#lowestCount++

    return result
  }

  //Returns the first element from the queue
  peek(){
    if(this.isEmpty()){
      return undefined
    }

    return this.#items[this.#lowestCount]
  }

  isEmpty(){
    return this.size() === 0
  }

  size(){
    return this.#count - this.#lowestCount
  }

  clear() {
    this.#items = {}
    this.#count = 0
    this.#lowestCount = 0
  }

  toString() {
    if(this.isEmpty()){
      return undefined
    }

    let objString = `${this.#items[this.#lowestCount]}`

    for(let i = this.#lowestCount + 1; i < this.#count; i++){
      objString = `${objString}, ${this.#items[i]}`
    }

    return objString
  }
}

const queue = new Queue()

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')

console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())

queue.dequeue()
queue.dequeue()

console.log(queue.toString())


