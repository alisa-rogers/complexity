# Dictionary

The script checks the entered words on their presence at the dictionary. 
The dictionary consists of 5 words: "complexity", "algorithm", "natural", "language", "processing".
If there are words that are not included to the dictionary in the input, the script shows an error message and lists those words. 
If there are no such words, it shows a message "Correct!"

## Code explanation

The array is our dictionary; the string is a text entered by user.
```javascript
let dictionary = ["complexity", "algorithm", "natural", "language", "processing"];
let string = (prompt("Type here:"));
```
Replace all the non-letter characters and make the script case-insensitive:
```javascript
string = string.replace(/[.,\'/#!$%\^"&\*;@:{}=\-_`?~()]/g,"")
string = string.toLowerCase();
```
Splits the string to the separate words:
```javascript
let array = string.split (" ");
```
The array will consist of entered words that are not included to the dictionary.
```javascript
let newWords = [];
```
The "for"-loop loops through all the words and includes the words that are not included to the dictionary
in this array.
```javascript
    for (let m = 0; m < array.length; m++) {
        let current = array[m];
        if (dictionary.includes(current) === false)  {
            newWords.push (current)
        };
};
```
If this array stays empty, the script shows a message "Correct!".
```javascript
if (newWords.length === 0) {
    alert ("Correct!");
}
```
Otherwise it shows an error message and a list of unrecognised words.
```javascript
else {
    alert ("Error! Unrecognised words: " + newWords + ".");
};
```


[Tests](https://www.google.com)

## Screenshots
![dict1](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/dict1.png)
![dict2](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/dict2.png)
![dict3](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/dict3.png)
![dict4](https://github.com/alisa-rogers/complexity/blob/master/dictionary/screenshots/dict4.png)
