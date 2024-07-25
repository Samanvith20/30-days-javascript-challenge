class InputValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "InputValidationError";
    }
  }
  
  function validateInput(input) {
    if (input === "") {
      throw new InputValidationError("Input cannot be empty");
    }
    
  }
  
  try {
    validateInput("");
  } catch (error) {
    console.error("Error:", error.message);
  }
  