function divide(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
  }
  
  try {
    const result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  