console.log("connected JavaScript file");

let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");


const allJobs = document.getElementById("all-jobs");
const jobsCount = document.getElementById("available-jobs-count");
const mainContent = document.getElementById("all-jobs");
const interviewContent = document.getElementById("interview-content");
const rejectedContent = document.getElementById("rejected-content");

function totalCount() {
    total.innerText = allJobs.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
totalCount();

function toggleButton(id) {
    console.log(id)

    allBtn.classList.remove("bg-blue-500", "text-white");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");

    if (id === "all-btn") {
        allBtn.classList.add("bg-blue-500", "text-white");
        jobsCount.innerText = allJobs.children.length;
        interviewContent.classList.add("hidden");
        rejectedContent.classList.add("hidden");
        allJobs.classList.remove("hidden");
    } else if (id === "interview-btn") {
        interviewBtn.classList.add("bg-blue-500", "text-white");
        jobsCount.innerText = interviewList.length;
        allJobs.classList.add("hidden");
        rejectedContent.classList.add("hidden");
        interviewContent.classList.remove("hidden");
        renderInterviewList();
    } else if (id === "rejected-btn") {
        rejectedBtn.classList.add("bg-blue-500", "text-white");
        jobsCount.innerText = rejectedList.length;
        allJobs.classList.add("hidden");
        interviewContent.classList.add("hidden");
        rejectedContent.classList.remove("hidden");
    }
}

mainContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode;
        const JobName = parentNode.querySelector(".job-name").innerText;
        const JobTitle = parentNode.querySelector(".job-title").innerText;
        const WorkingHour = parentNode.querySelector(".working-hour").innerText;
        const Description = parentNode.querySelector(".description").innerText;
        parentNode.querySelector(".state").innerText = "Interview";
        const state = "Interview";

        const jobInfo = {
            JobName,
            JobTitle,
            WorkingHour,
            Description,
            state
        }

        console.log(jobInfo);

        const existingJob = interviewList.find(item => item.JobName === jobInfo.JobName);
        if (!existingJob) {
            interviewList.push(jobInfo);
            rejectedList = rejectedList.filter(item => item.JobName !== jobInfo.JobName);
            totalCount();
            renderInterviewList();
        }
    } else if (event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode;
        const JobName = parentNode.querySelector(".job-name").innerText;
        const JobTitle = parentNode.querySelector(".job-title").innerText;
        const WorkingHour = parentNode.querySelector(".working-hour").innerText;
        const Description = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".state").innerText = "Rejected";

        const state = "Rejected";

        const jobInfo = {
            JobName,
            JobTitle,
            WorkingHour,
            Description,
            state
        }

        console.log(jobInfo);

        const existingJob = rejectedList.find(item => item.JobName === jobInfo.JobName);
        if (!existingJob) {
            rejectedList.push(jobInfo);
            interviewList = interviewList.filter(item => item.JobName !== jobInfo.JobName);
            totalCount();
            renderRejectedList();
        }
    }
});

function renderInterviewList() {
    interviewContent.innerHTML = "";

    for (let job of interviewList) {
        let jobElement = document.createElement("div");
        jobElement.classList.add("mt-8", "p-4", "bg-white");
        jobElement.innerHTML = `
        <div class="title flex items-center justify-between mb-2">
                <h3 class="job-name font-semibold text-blue-950">${job.JobName}</h3>
                <button class="delete btn btn-soft btn-error"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <p class="job-title mb-2 text-neutral-400">${job.JobTitle}</p>
            <p class="working-hour mb-2 text-neutral-400">${job.WorkingHour}</p>

            <button class="state btn btn-soft btn-primary mb-2">${job.state}</button>
            <p class="description text-sm mb-2">${job.Description}</p>
            <button class="interview-btn btn btn-dash btn-success">Interview</button>
            <button class="rejected-btn btn btn-dash btn-error">Rejected</button>
         `
        interviewContent.appendChild(jobElement);
    }
}

function renderRejectedList() {
    rejectedContent.innerHTML = "";
    for (let job of rejectedList) {
        let jobElement = document.createElement("div");
        jobElement.classList.add("mt-8", "p-4", "bg-white");
        jobElement.innerHTML = `
        <div class="title flex items-center justify-between mb-2">
                <h3 class="job-name font-semibold text-blue-950">${job.JobName}</h3>
                <button class="delete btn btn-soft btn-error"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <p class="job-title mb-2 text-neutral-400">${job.JobTitle}</p>
            <p class="working-hour mb-2 text-neutral-400">${job.WorkingHour}</p>    
            <button class="state btn btn-soft btn-primary mb-2">${job.state}</button>
            <p class="description text-sm mb-2">${job.Description}</p>
            <button class="interview-btn btn btn-dash btn-success">Interview</button>
            <button class="rejected-btn btn btn-dash btn-error">Rejected</button>
            `
        rejectedContent.appendChild(jobElement);
    }
}