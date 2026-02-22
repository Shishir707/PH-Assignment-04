console.log("connected JavaScript file");

let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");


const allJobs = document.getElementById("all-jobs");

function totalCount() {
    total.innerText = allJobs.children.length;
}

totalCount();