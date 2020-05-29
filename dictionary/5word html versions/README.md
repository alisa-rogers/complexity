## A version without a button

The script checks words entered by user on their presence at the dictionary. 
It checks the input each time the user adds something to the form
or deletes something out of it.
The dictionary includes 5 words: "complexity", "algorithm", "natural", "language", "processing".
A word is defined as a sequence of letters separated by spaces. Other symbols are not taken into account.
The script shows all the new words in a string under the input form.


## A version with a button
This version of the script works similarly to the first. The only difference is that this time the script only checks the input 
when a user presses the button.

## Tests
| Input                                                            | Expected result                                                 | Actual result                                                   |
|------------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|
| complexity, algorithm, natural, language, processing             | -                                                               | -                                                               |
| complexety, algorythm, naturel, languige, procesing              | The new words: complexety,algorythm,naturel,languige,procesing. | The new words: complexety,algorythm,naturel,languige,procesing. |
| complexity, algorithm, natural, language, processing, complexety | The new words: complexety.                                      | The new words: complexety.                                      |
| language                                                         | -                                                               | -                                                               |
| 123454321                                                        | -                                                               | -                                                               |
| complexety                                                       | The new words: complexety.                                      | The new words: complexety.                                      |


## Screenshots

![screen1](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/screen%201.PNG)
![screen2](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/screen%202.PNG)
![screen3](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/screen%203.PNG)
![screen4](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/screen%204.PNG)


