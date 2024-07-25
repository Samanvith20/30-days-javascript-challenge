function CheckFlow(){
    try {
        console.log("This is try block");
        throw new Error("This is an error");
    } catch (error) {
         console.log("Error:", error.message);
    }finally{
        console.log("This is finally,executed always")
    }
}
CheckFlow();