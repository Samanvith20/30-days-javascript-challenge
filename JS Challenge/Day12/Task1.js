function throwError() {
    throw new Error("This is an intentional error");
  }
  
  try {
    throwError();
  } catch (error) {
    console.error("Error caught:", error.message);
  }