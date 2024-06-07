#!/usr/bin/node
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const r1 = new Rectangle(5, 10);
console.log(r1); // Output: Rectangle { height: 5, width: 10 }
