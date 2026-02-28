```markdown
# AGENTS.md Guidelines

## 1. Introduction

These guidelines are designed to ensure the consistent, efficient, and high-quality development of the AGENTS repository.  They prioritize code clarity, maintainability, and testability. Adherence to these principles is mandatory.  The core objective is to create a robust and adaptable system.

## 2. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent class and function should have a single, well-defined purpose.
*   **Composition over Inheritance:** Prefer composing existing agents rather than relying on complex inheritance hierarchies.
*   **Code Reuse:**  Actively look for opportunities to reuse existing code and components.
*   **Abstraction:** Define abstract interfaces and data structures to reduce code duplication.

## 3. KISS (Keep It Simple, Stupid)

*   **Minimal Code:** Strive for the shortest possible code that achieves the desired result.
*   **Readability:** Write code that is easy to understand and maintain.
*   **Simplicity:** Favor simple solutions over complex ones.
*   **Avoid Over-Engineering:** Resist unnecessary complexity.

## 4. SOLID Principles

*   **Single Responsibility Principle (SRP):** Classes should have a single, well-defined responsibility.
*   **Open/Closed Principle:** Classes should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Client code should not be forced to depend on methods it does not use.
*   **Dependency Inversion Principle:**  High-level modules should be dependent on low-level modules, and vice-versa.

## 5. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Code:** Only implement features and functionalities that are currently required.
*   **Future-Proofing:**  Don’t add code that might be obsolete or that is not needed in the future.
*   **Focus on Current Requirements:** Prioritize implementing only what’s necessary to meet the immediate goals.

## 6. Development Workflow

1.  **Planning:**  Before starting, clarify the overall architecture and functionality of each agent.
2.  **Coding:** Implement the logic and data structures clearly and concisely.
3.  **Unit Testing:** Write unit tests to verify the functionality of each agent class and function.
4.  **Code Review:** Conduct code reviews to ensure quality, maintainability, and adherence to standards.
5.  **Refactoring:** Regularly refactor code to improve its design and readability.
6.  **Documentation:**  Add comments to explain complex logic or design decisions.

## 7. Test Coverage

*   **Minimum:**  80% test coverage should be achieved for all agents, functions, and classes.
*   **Independent Tests:** Tests should be independent of each other.
*   **Test-Driven Development:**  Prioritize writing tests *before* implementation.
*   **Mocking:** Use mocks exclusively for unit testing.
*   **Data-Driven Testing:**  Utilize data-driven testing to cover various scenarios.

## 8. Code Length Constraints

*   **Maximum:** 180 lines of code per file.
*   **File Structure:** Organize files into logical groups based on functionality or component.

## 9.  Specific Requirements (Example - Adapt to Project Needs)

*   **Agent Data Model:** Define a clear data model for each agent class.
*   **API Design:** Specify clear and consistent API contracts for agents.
*   **Error Handling:** Implement robust error handling and logging.
*   **Configuration:**  Consider a mechanism for configuration, potentially through an external configuration file.

## 10.  General Guidelines

*   **Naming Conventions:** Follow established naming conventions (e.g., snake_case).
*   **Documentation:**  Use docstrings to explain function purpose and parameters.
*   **Comments:**  Write clear and concise comments to explain complex logic.
*   **Version Control:**  Use a version control system (e.g., Git) to track changes.
*   **Continuous Integration:**  Implement a continuous integration pipeline.

## 11.  Review Process

*   **Code Reviews:**  All code should be reviewed by at least one other developer.
*   **Static Analysis:** Utilize static analysis tools to identify potential issues.

```