# complex(e)ty check

The script checks if the input entered by user contains the word "complexety". If it does, the script shows a message about the error. 
The message also includes information about the correct way of spelling this word - "complexity".

![complScreen1](screenshots/complScreen1.png)
![complScreen2](screenshots/complScreen2.png)
![complScreen3](screenshots/complScreen3.png)
![complScreen4](screenshots/complScreen4.png)

TESTS:
1. Input: "complexity check"
   Expected result: "Correct!"
   Actual result: "Correct!"
   
2. Input: "complexety check"
   Expected result: "Error! Correct: complexity."
   Actual result: "Error! Correct: complexity."
   
3. Input: "complexetyyyy check"
   Expected result: "Correct!"
   Actual result: "Correct!"
   
4. Input: "ccccomplexety check"
   Expected result: "Correct!"
   Actual result: "Correct!"
   
   

!!! The script recognises as an incorrect word only the word "complexety" written with the lowercase letters.
