function complexity () {
         let strings = [];
         strings.push (prompt("Type here:"));
         for (let m = 0; m < strings.length; m++) {
             let current = strings[m];
             if (current.indexOf("complexety") === -1) {
                 alert ("Correct!")
             }
             else {
                 const check = strings[m].split (" ");
                 if (check.includes("complexety")) {
                     alert ("Error! Correct: complexity.");
                 }
                 else {
                   alert ("Correct!")
                 };  
             };
         };
     };
    </script>