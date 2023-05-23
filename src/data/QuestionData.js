export const questionData = [
  {
    id: "q1",
    number: 1,
    text: "Is it injured?",
    details:
      "Check for any visible injuries, such as wounds or unusual leg or wing positions. Ensure that the bird appears healthy, behaves normally, and is able to move comfortably.",
    answers: [
      { text: "Yes", nextQuestion: "outcomeHelp" },
      { text: "No", nextQuestion: "q2" },
    ],
  },
  {
    id: "q2",
    number: 2,
    text: "Is it feathered?",
    details:
      "The state of a bird's plumage can serve as a reliable indicator of its age and developmental stage.",
    answers: [
      { id: "aHatchling", text: "It's a hatchling", nextQuestion: "q3" },
      { id: "aNestling", text: "It's a nestling", nextQuestion: "q3" },
      { id: "aFledgling", text: "It's a fledgling", nextQuestion: "q7" },
      { id: "aAdult", text: "It's an adult", nextQuestion: "q9" },
    ],
  },
  {
    id: "q3",
    number: 3,
    text: "Do you see the nest?",
    details:
      "Hatchlings and nestlings are still confined to the nest. It shall probably be somewhere nearby as such young birds can not cover big distances on their own. Have a good look around, check the closest bushes and trees. Some nests can be very tiny, so make sure to check them thoroughly.",
    answers: [
      { text: "Yes", nextQuestion: "q4" },
      { text: "No", nextQuestion: "q5" },
    ],
  },
  {
    id: "q4",
    number: 4,
    text: "Can you put it back?",
    details:
      "If you can reach the nest, and it is still intact, you can carefully put the baby bird back. Don't worry, the parents won't stop feeding it because you touched it, their recognition of their younglings isn't depending on scents. However, if it can be assumed, that a predator attacked the nest, do not put the baby bird back.",
    answers: [
      { text: "Yes", nextQuestion: "q6" },
      { text: "No", nextQuestion: "q5" },
    ],
  },
  {
    id: "q5",
    number: 5,
    text: "Can you make a nest?",
    details:
      "It is possible to create a makeshift nest from a basket or any similar object. Tie it up and fix it on a nearby branch, so the parents can find their baby by its sound.",
    answers: [
      { text: "Yes", nextQuestion: "q6" },
      { text: "No", nextQuestion: "outcomeHelp" },
    ],
  },
  {
    id: "q6",
    number: 6,
    text: "Do the parents return to feed it?",
    details:
      "If possible, watch the nest from a distance for a while (1 hour would be ideal), to be sure that the parents are still in the near and are capable of feeding the babies.",
    answers: [
      { text: "Yes", nextQuestion: "outcomeOK" },
      { text: "No", nextQuestion: "outcomeHelp" },
    ],
  },
  {
    id: "q7",
    number: 3,
    text: "Is it in danger?",
    details:
      "Fledglings are young birds that have left the nest but are still dependent on their parents for food and protection for a few days, until they learn to fly and get food by themselves. Check whether they are in a safe place. Are there predators in the near? Is the bird on or next to a road?",
    answers: [
      { text: "Yes", nextQuestion: "q8" },
      { text: "No", nextQuestion: "outcomeOK" },
    ],
  },
  {
    id: "q8",
    number: 4,
    text: "Can you get it to a safe place?",
    details:
      "Make sure no cats or dogs are allowed to go near the bird. Try to carefully take it or lead it out of the danger zone, preferably under a dense bush. ",
    answers: [
      { text: "Yes", nextQuestion: "outcomeOK" },
      { text: "No", nextQuestion: "outcomeHelp" },
    ],
  },
  {
    id: "q9",
    number: 3,
    text: "Can it fly?",
    details:
      "Adult birds should be able to fly away if danger approaches. Watch the bird a while, if necessary, try to go closer to check if it can fly away comfortably. Be careful not to divert it into dangerous territory.",
    answers: [
      { text: "Yes", nextQuestion: "outcomeOK" },
      { text: "No", nextQuestion: "outcomeHelp" },
    ],
  },
  {
    id: "outcomeHelp",
    number: null,
    text: "Please seek help!",
    details:
      "Do not leave the bird behind. If possible, carefully pick it up and put it in a box or in any dry, dark but well-aired safe place until help arrives. Call the nearest vet, a local animal welfare center, national park or zoo. They will be able to assist you further, regarding of what is the best to do in your exact situation.",
    message: "Thank you for saving a life!",
    answers: [],
  },
  {
    id: "outcomeOK",
    number: null,
    text: "You don't have to do anything!",
    details:
      "All is fine, there is no need for intervention. Please keep an eye open for any wildlife that may be in need of help - like the way you did just now.",
    message: "Enjoy your day!",
    answers: [
    
    ],
  },
];
