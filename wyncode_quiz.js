const rs = require("readline-sync");

let name = rs.question("what is your name? ");

console.log(`Hello ${name}, Welcome to the Wyncode champaign room`)
console.log("Can I interest you in a coding quiz");

let option = rs.question( "Options: Yes | You had me at hello | No  | JavaScript ain't got nothing on me! ".toLowerCase());

//Option 1 Yes
if (option == "you had me at hello" || option == "yes") {
    console.log("Welcome today's coding quiz, would you like to see the rules of coding quiz? ")
    let optionTwo = rs.question( "Options: Yes, No ".toLowerCase());
    if (optionTwo == "yes") {
        console.log("1.The first rule of coding quiz is: You do not talk about coding challenge.\n 2.The second rule of coding challenge is: You do not talk about coding challenge.\n 3.The third rule of coding challenge is: You do not talk about coding challenge.\n 4.Let's the challenge begin!")

        let questionOne = rs.question( "Question1: Who is the creator of JavaScript? ".toLowerCase());
        if(questionOne == "brendan eich") {
          console.log("Excellent!")
          let questionTwo = rs.question( "Question2: What does CSS stand for? ".toLowerCase());
          if(questionTwo == "cascading style sheet") {
            console.log("Outstanding!")
            let questionThree = rs.question( "Question3: Is Java and JavaScript one in the same? ".toLowerCase());
            if(questionThree == "no") {
              console.log("Superb!");
              console.log("Flawless Victory!!!");
              console.log("You score 3 out of 3 | Thanks for playing my game!!!");
            }
          }else{
            console.log("'Well, nobody's perfect.'");
            let wrongOne = rs.question( "Question2: What does HTML stand for? ".toLowerCase());
            if(wrongOne == "hypertext markup language" || wrongOne == "hyper-text markup language" || wrongOne == "hyper text markup language") {
              console.log("welldone!");
              let wrongOneTwo = rs.question( "Question3: Is HTML a programing language? ".toLowerCase());
              if(wrongOneTwo == "no") {
                console.log("Excellent! HTML is not a programing language it is a markup language");
                console.log("You score 2 out of 3 | Thanks for playing my game!!!");
              }
            } else {
              console.log("'Houston, we have a problem.'");
            }
          }
        } else {
          console.log("'wrong! Keep your chin up, 'After all, tomorrow is another day!'");
        }
} else if (optionTwo == "no"){
  console.log(` ${name} I think this is the beginning of a beautiful friendship`);
}
}


//Option 2 No
else if (option == "no") {
  console.log(`Thanks ${name} for stopping by. Perhaps next time. Please don't forget to tip the waiter on your way out. And remember, "There is no coding in the champaign room!"`)
}
//END OF THE ROAD


//Option 3 Movie reference
else if (option == "javascript ain't got nothing on me!" || option == "javascript ain't got nothing on me") {
 console.log("Let me make you an offer you can't refuse")
 let optionThreeOne = rs.question( "Options: Yes | No ".toLowerCase())
 if (optionThreeOne == "yes") {
     console.log('Would you like to know "The stuff that dreams are made of?"');
     let dreams = rs.question( "Options: Yes | I want to be alone ".toLowerCase())
     if (dreams == "yes") {
         console.log('They are "made of sterner stuff."');
         console.log("Hasta la vista, Wyncoder")
       }    else if (dreams == "I want to be alone") {
               console.log('May the Force be with you.')
               console.log("Hasta la vista, Wyncoder")
             }else {
               console.log("Hasta la vista, Wyncoder")
             }
   }    else if (optionThreeOne == "no") {
           console.log('Thank you for stopping by, "After all, tomorrow is another day!"')
           console.log("Hasta la vista, Wyncoder")
         }else {
           console.log("Hasta la vista, Wyncoder")
         }
}


//Option 4 not option 1,2,3
else {
 console.log("Hasta la vista, Wyncoder")
}
//END OF THE ROAD

//
// const rs = require("readline-sync");
//
// let option = rs.question( "Options: Yes | You had me at hello | No  | JavaScript ain't got nothing on me! ".toLowerCase());
//
// //Option 1 Yes
// if (option == "you had me at hello" || option == "yes") {1111
//     console.log("Welcome today's coding quiz, would you like to see the rules of coding quiz? ")
//     let optionTwo = rs.question( "Options: Yes, No ".toLowerCase());
//     if (optionTwo == "yes") {
//         console.log("1.The first rule of coding quiz is: You do not talk about coding challenge.\n 2.The second rule of coding challenge is: You do not talk about coding challenge.\n 3.The third rule of coding challenge is: There is no coding in the Wyncode room.\n 4.If you miss 2 questions, it's gamed over!")
//
//         let questionOne = rs.question( "Question1: Who is the creator of JavaScript? ".toLowerCase());
//         if(questionOne == "brendan eich") {
//           console.log("Excellent!")
//           let questionTwo = rs.question( "Question2: What does CSS stand for? ".toLowerCase());
//           if(questionTwo == "cascading style sheet") {
//             console.log("Outstanding!")
//             let questionThree = rs.question( "Question3: Is Java and JavaScript one in the same? ".toLowerCase());
//             if(questionThree == "no") {
//               console.log("Superb!");
//               console.log("Flawless Victory!!!");
//               console.log("You score 3 out of 3 | Thanks for playing my game!!!");
//             }
//           }
//           else{
//             console.log("'Well, nobody's perfect.'");
//             let wrongOne = rs.question( "Question2: What does HTML stand for? ".toLowerCase());
//             if(wrongOne == "hypertext markup language" || wrongOne == "hyper-text markup language" || wrongOne == "hyper text markup language") {
//               console.log("welldone!");
//               let wrongOneTwo = rs.question( "Question3: Is HTML a programing language? ".toLowerCase());
//               if(wrongOneTwo == "no") {
//                 console.log("Excellent! HTML is not a programing language it is a markup language");
//                 console.log("You score 2 out of 3 | Thanks for playing my game!!!");
//               }
//             } else {
//               console.log("'Houston, we have a problem.'");
//               console.log("You missed 2 questions, better luck next time | Thanks for playing my game!!!");
//             }
//           }
//         }
//
//         else {
//           console.log("'wrong! Keep your chin up, 'After all, tomorrow is another day!'");
//           let question_Two = rs.question( "Question2: What does CSS stand for? ".toLowerCase());
//           if(question_Two == "cascading style sheet") {
//             console.log("Great!")
//             let question_Three = rs.question( "Question3: Is Java and JavaScript one in the same? ".toLowerCase());
//             if(question_Three == "no") {
//               console.log("Spectacular!");
//               console.log("You score 2 out of 3 | Thanks for playing my game!!!");
//               let questionThree = rs.question( "Question3: Is Java and JavaScript one in the same? ".toLowerCase());
//             }else {
//               console.log("");
//               console.log("You missed 2 questions, better luck next time | Thanks for playing my game!!!");
//       }
// }
//
// else if (optionTwo == "no"){
//   console.log(` ${name} I think this is the beginning of a beautiful friendship`);
//   }
// }
