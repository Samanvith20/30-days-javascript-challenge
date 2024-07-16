function pattern(N) {
    
    for (let i = 0; i < N; i++) {
        let row = '';
       
        for (let j = 0; j <= i; j++) {
            row += '* ';
        }
        
        console.log(row);
    }
}


let N = 5;

pattern(N);
