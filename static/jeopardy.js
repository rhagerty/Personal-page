
let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

const NUM_CATEGORIES = 6;
const NUM_CLUES = 5;
const apiUrl = "http://jservice.io/api/";

async function getCategoryIds() {
  let response = await axios.get(`${apiUrl}categories?count=100`);
  
  let catIds = response.data.map((c) => c.id);
  return _.sampleSize(catIds, NUM_CATEGORIES);
}

let clues;
async function getCategory(catId) {
  let response = await axios.get(`${apiUrl}category?id=${catId}`);
  let cat = response.data;
  let allClues = cat.clues;

  let randomClues = allClues.slice(0, 5);

  clues = randomClues.map((c) => ({
    question: c.question,
    answer: c.answer,
    value: c.value,
    catId: c.category_id,
    showing: null,
  }));
  return { title: cat.title, clues };
}

async function fillTable() {
  $("thead").empty();
  let $tr = $("<tr>");
  for (let catIdx = 0; catIdx < NUM_CATEGORIES; catIdx++) {
    $tr.append($("<th>").text(categories[catIdx].title));
  }
  $("thead").append($tr);

  // Add rows with questions for each category
  $("tbody").empty();
  for (let clueIdx = 0; clueIdx < NUM_CLUES; clueIdx++) {
    let $tr = $("<tr>");
    for (let catIdx = 0; catIdx < NUM_CATEGORIES; catIdx++) {
      $tr.append(
        $("<td>")
          .attr("id", `${catIdx}-${clueIdx}`)
          .text("$" + categories[catIdx].clues[clueIdx].value)
      );
    }
    $("tbody").append($tr);
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */
$("table").click(function handleClick(evt) {
  let id = evt.target.id;
  let [catId, clueId] = id.split("-");
  let clue = categories[catId].clues[clueId];
  $(evt.target).addClass("showing");

  let msg;

  if (!clue.showing) {
    msg = clue.question;
    clue.showing = "question";
    
  } else if (clue.showing === "question") {
    msg = clue.answer;
    clue.showing = "answer";
  } else {
    return;
  }

  $(`#${catId}-${clueId}`).html(msg);
});

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  let catIds = await getCategoryIds();

  categories = [];

  for (let catId of catIds) {
    categories.push(await getCategory(catId));
  }

  fillTable();
  $("button.startGame").text("NEW GAME");
}

/** On click of start / restart button, set up game. */
$("button.startGame").click(async function () {
  await setupAndStart();
});
