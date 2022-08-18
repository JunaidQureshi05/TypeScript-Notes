// Enums allows us to efine a set of named constants . Wecan give these constants umeric or string values

// example

enum OrderStatus {
  PENDING, //0
  SHIPPED, //1
  DELIVERED, //2
  RETURNED, //3
}

function isDelieved(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

console.log(ArrowKeys.LEFT);
