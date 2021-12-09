function longword(){
    let main = '';
    let firWord= '';
    let secWord= '';
    let answer= '';
do {
  
  let firWord = prompt('Enter a word');
  main = main + firWord;
  console.log( main );
  let secWord = prompt('Enter a word');
  main = main +  secWord;
  console.log( main );
  answer = confirm('Continue?');
  console.log( main );
  
} while (answer === true);

}
longword()















// let firWord =prompt('Enter a word')
// let secWord = prompt('Enter a word')
// let askWord = prompt('Write cancel to stop or any other word wo continue')
// let main = firWord + secWord + askWord
// console.log(main)

