# 🎭 QA Project 1 - Playwright Automation Framework

## 📌 Project Overview

This project is an end-to-end test automation framework developed using **Playwright** and **TypeScript**. It automates functional test scenarios for a web application by applying the **Page Object Model (POM)** design pattern, improving code maintainability, readability, and scalability.

The project demonstrates best practices in UI test automation, including reusable page objects, organized test cases, assertions, and automated test execution.

---

## 🚀 Technologies Used

- Playwright
- TypeScript
- Node.js
- npm
- Visual Studio Code
- Git & GitHub

---

## 📁 Project Structure

```text
QA_Project1_PlayWright/
│
├── pages/                 # Page Object Model classes
├── tests/                 # Automated test cases
├── playwright-report/     # HTML reports
├── test-results/          # Execution results
├── node_modules/
├── playwright.config.ts   # Playwright configuration
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Test Scenarios Automated

The automation suite includes the following functional test cases:

| Test Case | Description |
|-----------|-------------|
| TC-001 | Validate Home page |
| TC-002 | Validate Contact Form |
| TC-003 | Download Certificate |
| TC-004 | View My Account |
| TC-005 | View Courses |
| TC-006 | Search Blog Articles |
| TC-007 | Validate Newsletter Subscription |
| TC-008 | Validate Company Services |
| TC-009 | Validate Contact Page |

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/AnaCenteno-DA/QA_Project1_PlayWright.git
```

Navigate to the project folder:

```bash
cd QA_Project1_PlayWright
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/home.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests using a specific browser:

```bash
npx playwright test --project=chromium
```

---

## 📊 Test Report

Generate the Playwright HTML report:

```bash
npx playwright show-report
```

---

## 📈 Automation Features

- ✅ End-to-End UI Testing
- ✅ Functional Testing
- ✅ Page Object Model (POM)
- ✅ Assertions with Playwright
- ✅ Cross-browser support
- ✅ Reusable components
- ✅ Organized project structure
- ✅ HTML Reporting

---

## 💡 Skills Demonstrated

- Test Automation
- Software Quality Assurance (QA)
- Functional Testing
- UI Testing
- Test Case Design
- TypeScript
- Playwright Framework
- Git Version Control
- Agile Testing Practices

---

## 👩‍💻 Author

**Ana Centeno**

QA Analyst | QA Automation Engineer | Software Tester

📍 Laval, Quebec, Canada

🔗 LinkedIn:
https://www.linkedin.com/in/ana-centeno-tech/

🔗 GitHub:
https://github.com/AnaCenteno-DA

---

## ⭐ About This Project

This project was created as part of my QA Automation portfolio to demonstrate practical experience in Playwright, UI testing, automation framework design, and software quality assurance best practices.
