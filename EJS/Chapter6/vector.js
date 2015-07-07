function Vector(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.plus = function(add) {
    return new Vector(this.x + add.x, this.y + add.y);
};

Vector.prototype.minus = function(subt) {
    return new Vector(this.x - subt.x, this.y - subt.y);
}

Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
        }
});
// EJS tests
console.log(new Vector(1, 2).plus(new Vector(2, 3))); // Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // 5
