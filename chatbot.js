var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var accountingButton = document.getElementById('accounting-btn');
var mergerButton = document.getElementById('marger-btn');
var generalButton = document.getElementById('general-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex;
var answeredQuestions = 0;
var score = 0; 
var scoreContainer = document.getElementById('score-container');
var scoreElement = document.getElementById('score');
var totalQuestionsElement = document.getElementById('total-questions');



console.log("Hello, world!");

document.addEventListener('DOMContentLoaded', function (event) {
    var element = document.getElementById('start-btn');
    if (element) {
        console.log('Element exists');
    }
    else {
        console.log('Element does not exist');
    }
});


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', function () {
    currentQuestionIndex++;
    setNextQuestion();
});



function startGame() {
    console.log('started');
    scoreContainer.classList.add('hide');
    startButton.classList.add('hide');
    score = 0;
    answeredQuestions = 0;
    // Shuffle questions and limit to first 10
    shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 40);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
    } else {
        // End of quiz, show restart option
        questionContainerElement.classList.add('hide');
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
} 

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct) {
        score++; // Increment the score for correct answers
    }

    answeredQuestions++; // Increment the count of answered questions
    
    if (answeredQuestions < shuffledQuestions.length) {
        nextButton.classList.remove('hide');
    } else {
        // The quiz is complete; call a function to show the end screen
        showEndScreen();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showEndScreen() {
    questionContainerElement.classList.add('hide'); // Hide question container
    nextButton.classList.add('hide'); // Ensure next button is hidden

    // Update and show the score container
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = answeredQuestions;
    scoreContainer.classList.remove('hide'); // Make score container visible

    // Modify the start button for a restart option
    startButton.innerText = 'Restart Quiz';
    startButton.classList.remove('hide');
}


var questions = [

{
    topic: 'Accounting',
    question: 'Which of the following statements is TRUE about the audit report in an annual report?',
    answers: [
        { text: "The audit report will state whether fraudulent activity has been detected in the audit work undertaken", correct: false },
        { text: "The audit report will tell you that the accounts are a 'correct and accurate' representation of a companies financial position and its income and profit for the reporting period", correct: false },
        { text: "The audit report will highlight any non-compliance with the relevant accounting standards and give reason as to why the standards have not been followed", correct: true },
        { text: "The 'clean' audit report is a guarantee that the numbers in the accounts correctly represent the company's financial position and its income & expenditure and cash flows for the reporting period", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'What section would you find PPE on the Balance Sheet?',
    answers: [
        { text: "Assets", correct: true },
        { text: "Liabilities", correct: false },
        { text: "Equity", correct: false },
        { text: "Cash Flow", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'In what section would you find Bank Loans?',
    answers: [
        { text: "Assets", correct: false },
        { text: "Liabilities", correct: true },
        { text: "Equity ", correct: true },
        { text: "Cash Flow", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'In which section of the Balance Sheet would you find Retained Earnings?',
    answers: [
        { text: "Assets", correct: false },
        { text: "Liabilities", correct: true },
        { text: "Equity ", correct: true },
        { text: "Cash Flow", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'Which does not mean profit after interest and tax?',
    answers: [
        { text: "Earnings", correct: false },
        { text: "Net Incomes", correct: false },
        { text: "Equity Earnings", correct: false },
        { text: "Dividiends", correct: false},
        { text: "Net Profit", correct: false},
        { text: "Operating Profit", correct: true},
    ],
 
},

{
    topic: 'Accounting',
    question: "The 'matching' or 'accruals' concept in accounting refers to the fact that…'",
    answers: [
        { text: "Revenue is recorded when received as CASH and not before.  Expenses are recorded when paid in CASH and not before", correct: false },
        { text: "Revenue is recorded when received as CASH, but expenses are recorded as soon as they are incurred (which may be before they are paid in cash)", correct: false },
        { text: "Revenue is recorded when EARNED and expenses are recorded as soon as they are INCURRED.  Both of these may be before any cash is received / paid", correct: true },
    ],
 
},

{
    topic: 'Accounting',
    question: "A company makes a sale in 20X4, but the customer does not pay until 20X5.  In which year's accounts will the revenue be recorded?",
    answers: [
        { text: "20X4", correct: true },
        { text: "20X5", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "A company makes a sale in 20X4, but the customer does not pay until 20X5. In which year's Cash Flow Statement will the cash receipt be shown?",
    answers: [
        { text: "20X5", correct: true },
        { text: "20X4", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'A company makes a sale in 20X4 for $100, but the customer does not pay the $100 until 20X5. How is the transaction recorded by the company in 20X4?',
    answers: [
        { text: "Revenue $100, Receivables $100", correct: true },
        { text: "Nothing is recorded as revenue as no cash has been received", correct: false },
        { text: "Deferred Revenue $100, Receivable $100", correct: false },
        { text: "Revenue $100, Cash $100", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'Which of the following would not be included in the Operating section of Cash Flows for Year X in a Cash Flow Statement?',
    answers: [
        { text: "Cash used to purchased a machine used in the business core operations", correct: true },
        { text: "Cash received in year X relating to a credit Sale from the previous year", correct: false},
        { text: "Salaries and wages", correct: false},
        { text: "Cash paid to suppliers in Year X relating to supplies to be used in the following year", correct: false},
    ],
 
},

{
    question: 'The key categories in a Cash Flow Statement are: Operating, Investing, Financing, and Sales',
    topic: 'Accounting',
    answers: [
        { text: "False", correct: true },
        { text: "True", correct: false}
    ],
 
},

{
    question: 'A company invests in PPE costing $500.  It sells the asset after 3 years, having charged $300 of depreciation (so the book value is $200 at the time of sale).  You note a "Profit on disposal of PPE" of $30 in the P&L. So how much did it sell the asset for?',
    topic: 'Accounting',
    answers: [
        { text: "$200", correct: false },
        { text: "$230", correct: true },
        { text: "$170", correct: false },
        { text: "$270", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "A company notes a 'non-core' operating expense of $25m in its P&L relating to the disposal of assets.  The asset had a book value of $230m at the time of sale. So what were the proceeds from the sale of the asset?",
    answers: [
        { text: "$25m", correct: false },
        { text: "$205m", correct: true },
        { text: "$255m", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "When is a company allowed to 'capitalise' interest on a loan? (i.e. treat the spending as an asset rather than an expense)",
    answers: [
        { text: "When the interest relates to a loan taken out by the company, specifically for the purchase of another asset such as inventory or PPE", correct: false },
        { text: "When the interest relates to a loan taken out by the company, only for the purchase of a tangible fixed asset (PPE, land and buildings etc...)", correct: false },
        { text: "When the interest relates to a loan taken out by the company, and the loan is used to construct an asset for resale (e.g. a construction company)", correct: false},
        { text: "When the interest relates to a loan taken out by the company, and the loan is used to construct an asset to be used in the company's own operations (e.g. borrowing to build a new warehouse for the company's use)", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "When interest is capitalised, how does it feed in to the P&L and Cash Flow statement?",
    answers: [
        { text: "The interest is included in the P&L as part of the depreciation of the asset. The interest hits the 'interest paid' in the cash flow statement as and when it is paid", correct: true },
        { text: "The interest is included in the P&L as 'amortised interest expense' over the life of the asset.  The interest hits the cash flow as 'capex' when it is paid, rather than 'interest paid'", correct: false },
        { text: "The interest is included in the P&L as part of the depreciation of the asset, The interest hits the cash flow as 'capex' when it is paid, rather than 'interest paid'", correct: false},
        { text: "The interest is included in the P&L as 'amortised interest expense' over the life of the asset. The interest hits the 'interest paid' in the cash flow statement as and when it is paid", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "A company borrows $800m from a bank, before allowing for arrangement fees of 1%.  What is the impact on the balance sheet when the cash is borrowed?",
    answers: [
        { text: "Cash goes up $800, Liabilities (debt) go up $800", correct: false },
        { text: "Cash goes up $792, Liabilities go up $800, Expenses through the P&L are $8 (the 1% fee)", correct: false },
        { text: "Cash goes up $792, Liabilities go up $792", correct: false},
    ],
 
},


{
    topic: 'Accounting',
    question: "Which one of the following might be an indication of an asset impairment under IFRS, and what are the actions required?",
    answers: [
        { text: "A drop-off in a business unit's sales revenue, due to technology changes.  The management must implement an impairment review to determine whether the unit's assets are impaired", correct: true},
        { text: "A drop-off in a business unit's sales revenue, due to technology changes.  The management must make an immediate impairment based on known information", correct: false},
        { text: "A drop-off in a business unit's sales revenue, due to technology changes.  The management need only do an impairment review if the following year's profits are lower than current year (for that business unit)", correct: false},
        { text: "A drop-off in a business unit's sales revenue, due to technology changes. The management need only do an impairment review if the following year's P&L shows a loss", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: "Which of the following are examples of Intangibles you will potentially see on a company's balance sheet?",
    answers: [
        { text: "Future sales", correct: false },
        { text: "Purchased patents", correct: true },
        { text: "Internally generated brands", correct: false},
        { text: "'Pure research' costs", correct: false}
    ],
 
},


{
    topic: 'Accounting',
    question: "A company spends $10,000 on an item of machinery with an expected useful life of 5 years. The management estimate a residual value of $2,000. After 3 years, what is the Book Value of the machinery assuming straight line depreciation?",
    answers: [
        { text: "$10,000", correct: false },
        { text: "$5,200", correct: true },
        { text: "$4,000", correct: false},
    ],
 
},


{
    topic: 'Accounting',
    question: "If a company uses an accelerated method of depreciation, which of the following statements is TRUE, all other things being equal, compared to using a straight-line methodology?",
    answers: [
        { text: "Its operating profits will be HIGHER in the earlier years of the asset's life, and LOWER in the later years", correct: false },
        { text: "Its operating profits will be LOWER in the earlier years of the asset's life, and HIGHER in the later years", correct: true },
        { text: "Over the asset's life, core operating profits will always be the SAME regardless of the method of depreciation", correct: false},
    ],
 
},


{
    topic: 'Accounting',
    question: "Select the false statement in the options given below",
    answers: [
        { text: "If a company revalues its assets it will result in higher depreciation and lower operating profits (all other things being equal) in the year of revaluation", correct: false },
        { text: "If a company revalues its assets it does not have to charge depreciation on the new value, so operating profits are unaffected (all other things being equal)", correct: true },
        { text: "A company may NOT revalue assets under US standards (US GAAP)", correct: false},
        { text: "A 'revaluation' always means an upward revalue.  If the asset is reduced in value, other than depreciation, it is called an impairment", correct: false}
    ],
 
},


{
    topic: 'Accounting',
    question: "A company holds an asset on the balance sheet at a value of $2500.  The asset is sold for $2,200.  The difference of $300...",
    answers: [
        { text: "...is treated as an impairment and taken as a 'non-core' expense to the P&L", correct: false },
        { text: "...is treated as a profit on disposal and treated as non-core income in the P&L", correct: false},
        { text: "...is treated as a loss on disposal and taken as 'non-core' expense to the P&L", correct: true},
    ],
 
},


{
    topic: 'Accounting',
    question: "A company spends $10,000 on an item of machinery with an expected useful life of 5 years and Zero residual value.  After 3 years, what is the Book Value of the machinery?",
    answers: [
        { text: "$10,000", correct: false },
        { text: "$6,000", correct: false },
        { text: "$4,000", correct: true},
    ],
 
},


{
    topic: 'Accounting',
    question: "When calculating Return on Capital or Return on Assets. which profit is relevant?",
    answers: [
        { text: "Gross Profit", correct: false },
        { text: "Operating profit (EBIT)", correct: true },
        { text: "Profit after interest, but before tax", correct: false},
        { text: "Net profit (after interest and tax)", correct: false}
    ],
 
},


{
    topic: 'Accounting',
    question: "True or False?: Underlying EBITDA is EBITDA before any 'non-core' items, whether those items are cash or non-cash",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false},

    ],
 
},


{
    topic: 'Accounting',
    question: "A retail company owns a  large number of stores.  It regularly sells and buys stores.  When it sells a store, any profit or loss on disposal will be shown as 'non-core' income or expense",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false},
    ],
 
},


{
    topic: 'Accounting',
    question: "Under IFRS, any item considered 'non-core' will be shown as additional income or expenditure NET of any tax charges or credits",
    answers: [
        { text: "Provisions have an immediate impact on profits when initially recognised, but due to the uncertainty they are typically considered 'non-core'", correct: true },
        { text: "Provisions are only recognised in the P&L when there is certainty around the amount involved", correct: false},
        { text: "Provisions will never impact cash so can be ignored for cash-flow valuation purposes", correct: false},
        { text: "Provisions have no impact on tax (now or in the future)", correct: false}
    ],
 
},


{
    topic: 'Accounting',
    question: "Which is the description for Payable",
    answers: [
        { text: "This is a definite economic outflow in the future that can be reliably measured", correct: true},
        { text: "This is a probable economic outflow in the future that can be reliably measured - but some degree of estimation / subjectivity on amount or timing", correct: false },
        { text: "-	This is a possible economic outflow in the future that can be reliably measured, but an even greater degree of subjectivity eg the outcome of a legal dispute", correct: false},
    ],
},


{
    topic: 'Accounting',
    question: "Which is the description for Provision",
    answers: [
        { text: "This is a definite economic outflow in the future that can be reliably measured", correct: false },
        { text: "This is a probable economic outflow in the future that can be reliably measured - but some degree of estimation / subjectivity on amount or timing", correct: true },
        { text: "This is a possible economic outflow in the future that can be reliably measured, but an even greater degree of subjectivity eg the outcome of a legal dispute", correct: false},
    ],
 
},


{
    topic: 'Accounting',
    question: "Which is the description for Contingent Liability",
    answers: [
        { text: "This is a definite economic outflow in the future that can be reliably measured", correct: false },
        { text: "This is a probable economic outflow in the future that can be reliably measured - but some degree of estimation / subjectivity on amount or timing", correct: false },
        { text: "This is a possible economic outflow in the future that can be reliably measured, but an even greater degree of subjectivity eg the outcome of a legal dispute", correct: true},
    ],
 
},


{
    topic: 'Accounting',
    question: "Which of the following statements is correct?",
    answers: [
        { text: "Provisions have an immediate impact on profits when initially recognised, but due to the uncertainty they are typically considered 'non-core'", correct: true },
        { text: "Provisions are only recognised in the P&L when there is certainty around the amount involved", correct: false},
        { text: "Provisions will never impact cash so can be ignored for cash-flow valuation purposes", correct: false},
        { text: "Provisions have no impact on tax (now or in the future)", correct: false}
    ],
 
},


{
    topic: 'Valuation',
    question: "Which of the following factors would you not review in finding a comparable company for valuation?",
    answers: [
        { text: "Industry and business segment", correct: false },
        { text: "Growth profile", correct: false},
        { text: "Geography of business", correct: false},
        { text: "M&A profile", correct: false},
        { text: "Liquidity of stock", correct: false},
        { text: "Dominance of shareholders", correct: false},
        { text: "Debt to Equity mix", correct: true},
    ],
 
},


{
    topic: 'Valuation',
    question: "The value at ‘time t’ of a series of cash flows, growing constantly from then at a rate 'g' , with a cost of capital ‘r’ is given by the formula",
    answers: [
        { text: "CFt(1+g) / (r-g)", correct: true },
        { text: "CFt / (r-g)", correct: true },
        { text: "CFt / (r-g)", correct: false},
    ],
 
},


{
    topic: 'Valuation',
    question: "Which of the following statements re computing a WACC is true?",
    answers: [
        { text: "The WACC is computed using market values of equity and net debt", correct: false },
        { text: "The WACC is computed using book values of equity and gross debt", correct: false},
        { text: "The WACC is computed using market values of equity and gross debt", correct: true},
        { text: "The WACC is computed using market values of equity and net debt", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "Which of the following statements on Kd is true?",
    answers: [
        { text: "Kd is based on expected long-term rates and is computed with net of tax", correct: true},
        { text: "Kd is based on the current cost of borrowing and is computed with net of tax", correct: false},
        { text: "Kd is based on long-term rates and is computed with gross of tax", correct: false},
        { text: "Kd is based on current cost of borrowing and is computed with net of tax", correct: false}
    ],
 
},


{
    topic: 'Valuation',
    question: "Which of the following statements on Kd is true?",
    answers: [
        { text: "Kd is based on expected long-term rates and is computed with net of tax", correct: true },
        { text: "Kd is based on the current cost of borrowing and is computed with net of tax", correct: false},
        { text: "Kd is based on long-term rates and is computed with gross of tax", correct: false},
        { text: "Kd is based on current cost of borrowing and is computed with net of tax", correct: false}
    ],
 
},


{
    topic: 'Valuation',
    question: "Kd is computed net of tax ('post-tax cost of debt'). Which of the following explains most fully why this is correct?",
    answers: [
        { text: "When companies pay interest it is tax-deductible and FCFF calculations do not take this into account. So we now adjust for this 'tax shield'", correct: true },
        { text: "When companies pay interest, it is tax-deductible and FCFF calculations do take this into account, so we need to be consistent", correct: false},

    ],
 
},


{
    topic: 'Valuation',
    question: "Which of these models can not be used to estimate Ke (the cost of equity capital) for a business?",
    answers: [
        { text: "Dividend Discount Model: Ke=D1/Price + g", correct: false },
        { text: "Capital Asset Pricing Model: Ke= Rf + ꞵ(Rm-Rf)", correct: false},
        { text: "A multi-factor Arbitrage Pricing Theory model", correct: false},
        { text: "Black-Scholes Model", correct: true}
    ],
 
},


{
    topic: 'Valuation',
    question: "What is the definition of Beta (ꞵ)",
    answers: [
        { text: "This is a measure of the volatility of a security relative the market as a whole", correct: true},
        { text: "Using this simple investment strategy, stock-specific risk diminishes to all material extent leaving investors only exposed to broad market risk", correct: false},
        { text: "In the CAPM, a long-term yield on high quality government bonds is taken as the best proxy for this", correct: false},
        { text: "This is a measure of the average return premium earned by investing in a broad equity market portfolio, and is used in the CAPM", correct: false}
    ],
 
},


{
    topic: 'Valuation',
    question: "What is the definition of Diversification",
    answers: [
        { text: "This is a measure of the volatility of a security relative the market as a whole", correct: false },
        { text: "Using this simple investment strategy, stock-specific risk diminishes to all material extent leaving investors only exposed to broad market risk", correct: false },
        { text: "In the CAPM, a long-term yield on high quality government bonds is taken as the best proxy for this", correct: false},
        { text: "This is a measure of the average return premium earned by investing in a broad equity market portfolio, and is used in the CAPM", correct: false}
    ],
 
},


{
    topic: 'Valuation',
    question: "What is the definition of Risk-free rate of return",
    answers: [
        { text: "This is a measure of the volatility of a security relative the market as a whole", correct: false },
        { text: "Using this simple investment strategy, stock-specific risk diminishes to all material extent leaving investors only exposed to broad market risk", correct: false },
        { text: "In the CAPM, a long-term yield on high quality government bonds is taken as the best proxy for this", correct: true},
        { text: "This is a measure of the average return premium earned by investing in a broad equity market portfolio, and is used in the CAPM", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "What is the definition of Equity Market Risk Premium (=Rm-Rf)",
    answers: [
        { text: "This is a measure of the volatility of a security relative the market as a whole", correct: false },
        { text: "Using this simple investment strategy, stock-specific risk diminishes to all material extent leaving investors only exposed to broad market risk", correct: false },
        { text: "In the CAPM, a long-term yield on high quality government bonds is taken as the best proxy for this.", correct: false},
        { text: "This is a measure of the average return premium earned by investing in a broad equity market portfolio, and is used in the CAPM", correct: true}
    ],
 
},

{
    topic: 'Valuation',
    question: "Which is the following is not a recognised company valuation method?",
    answers: [
        { text: "DCF", correct: false },
        { text: "Comps analysis ", correct: false },
        { text: "Comparable transactions", correct: false},
        { text: "Discounted earnings", correct: true}
    ],
 
},

{
    topic: 'Valuation',
    question: "What is the fundamental reason for calculating a free cash flow to the firm (FCFF)",
    answers: [
        { text: "It allows the analyst to separate business cash flows from those relating to its capital structure (i.e. the amount of debt)", correct: true },
        { text: "It is a method that allows for cash income (dividends) from JVs and Associate companies", correct: false },
        { text: "It is the purest definition of cash for DCF as it is post-tax and post-financing costs", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "Which of the following summarise most comprehensively the measure of FCFF?",
    answers: [
        { text: "EBITDA - investment in working capital - tax on profit after interest - net capex", correct: false },
        { text: "EBITDA + investment in working capital - tax on profit before interest - net capex", correct: false },
        { text: "EBITDA - investment in working capital - tax on EBIT - net capex - / + other non-cash income / charges in the P&L", correct: true},
        { text: "EBITDA + investment in working capital - tax on EBIT - net capex -/+ other non-cash income/charges in the P&L", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "When computing FCFF we deduct net capex from operating cash flows, amongst other adjustments. What is net capex?",
    answers: [
        { text: "Cash capital expenditure net of tax allowances", correct: false },
        { text: "Cash capital expenditure net of incremental debt taken to fund the capex", correct: false },
        { text: "-	Cash capital expenditure net of cash received from disposals of other fixed asset", correct: false},
    ],
 
},


{
    topic: 'Valuation',
    question: "Which of the following is a disadvantage of DCF over relative value (multiples) valuation techniques?",
    answers: [
        { text: "DCF does not rely so heavily on accounting policies that can distort numbers", correct: false },
        { text: "DCF is simpler as the valuer does not have to consider all aspects of the operational numbers such as capex and investment in working capital", correct: true },
        { text: "DCF considers the timing of the cashflows and so the time-value of money can be allowed for explicitly", correct: false},
        { text: "DCF makes explicit allowance for risk through assumptions on the cost of equity and cost of deb", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "Which of the following is not a measure of relative value in a business?",
    answers: [
        { text: "Price / Earnings", correct: false },
        { text: "Enterprise Value / Earnings", correct: true },
        { text: "Enterprise Value / EBITDA", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "If EV is driven by the net operating assets of a company (which drives) EBITDA, what is not being omitted from an Enterprise Value?",
    answers: [
        { text: "Value of Joint Ventures", correct: false },
        { text: "Cash", correct: false },
        { text: "Any Non-controlling interest in subsidiaries", correct: true},
        { text: "Other financial assets such as investment securities", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "Why is Return on Capital Employed (ROCE) considered a better measure of investment performance than Return on Equity?",
    answers: [
        { text: "It includes the impact of company leverage which affect equity returns", correct: false },
        { text: "It eliminates / ignores the impact of leverage which distort equity returns", correct: true },
        { text: "It uses Net Income as the measure of return which is ultimately the return to all investors", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "Gordon's growth model arrives at a relationship that growth is driven by reinvesting earnings (net income). Which of the following relationships measures the growth based on the model",
    answers: [
        { text: "Growth = earnings retention ratio * Return on Equity", correct: true },
        { text: "Growth = earnings payout ratio * Return on Equity", correct: false },
        { text: "Growth = (1-dividend payout ratio) * ROCE", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "Which of the following is not a positive signal for an equity investor in a company?",
    answers: [
        { text: "ROE > Ke", correct: false },
        { text: "WACC > ROCE", correct: true },
        { text: "WACC < ROCE", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "A company with a cost of equity (Ke) of 10%, has a forecast a dividend of $20 in 5 year's time, which is then expected to grow at 3% in perpetuity. What is the Present Value of this stream of dividends?",
    answers: [
        { text: "$177.41", correct: false },
        { text: "$182.73", correct: true },
        { text: "$195.15", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "A company is expected to pay dividends of $15, $18, $22 over the next 3 years. Then the dividends are expected to grow at 3%pa in perpetuity. What is the present value of the complete dividend stream, assuming a Ke of 10%",
    answers: [
        { text: "$243.21", correct: false },
        { text: "$312.57", correct: true },
        { text: "$266.14", correct: false},
        { text: "$292.76", correct: false}
    ],
 
},

{
    topic: 'Valuation',
    question: "What is the present value of a single dividend of $35 being paid in 2 year's time, assuming a cost of equity of 10%",
    answers: [
        { text: "$28.93", correct: true },
        { text: "$31.82", correct: false },
        { text: "$35.00", correct: false},
    ],
 
},

{
    topic: 'Valuation',
    question: "What is the present value of a constant dividend of $15, starting in 1 year's time being paid in perpetuity? Assume a cost of equity of 8%. (1 decimal place)",
    answers: [
        { text: "$13.90", correct: false },
        { text: "$200.20", correct: false},
        { text: "$150.40", correct: false},
        { text: "$187.50", correct: true}
    ],
 
},

{
    topic: 'Valuation',
    question: "Using the 'Gordon growth' formula: Share price = D1/ (Ke-g) What is the expression for forecast dividend yield?",
    answers: [
        { text: "(Ke - g) / D2", correct: false },
        { text: "Price / Ke", correct: false },
        { text: "(Ke - g) / price", correct: false},
        { text: "Ke – g", correct: false}
    ],
 
},




]
