let score = 30;
// true means the score matches with case
switch(true){
   case(score>=95):
      console.log("Out Standing");
      break;
    case(score>=85):
      console.log("Excellent");
      break;
    case(score>=75):
      console.log("Distinction");
      break;
    case(score>=65):
      console.log("Average");
      break;
    case(score>=55):
      console.log("Poor");
      break;
    default:
      console.log("Failed");
}