# Contributing to TechZone

Thank you for your interest in contributing to TechZone! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Respect differing opinions

## How to Contribute

### 1. Fork the Repository
```bash
git clone https://github.com/yourusername/techZone.git
cd techZone
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Follow the existing code style
- Write meaningful commit messages
- Keep commits atomic and focused

### 4. Test Your Changes
- Test frontend changes in different browsers
- Test backend endpoints with Postman or similar tools
- Ensure no console errors or warnings

### 5. Commit and Push
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 6. Create a Pull Request
- Describe your changes clearly
- Reference any related issues
- Wait for review and feedback

## Coding Standards

### JavaScript/React
- Use ES6+ syntax
- Use meaningful variable and function names
- Add comments for complex logic
- Follow ESLint rules

### CSS/Tailwind
- Use Tailwind utility classes
- Avoid inline styles when possible
- Use responsive design patterns

### Backend
- Use async/await instead of callbacks
- Implement proper error handling
- Use middleware for common operations
- Follow RESTful API conventions

## Commit Message Format

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Example:
```
feat(cart): add item quantity update functionality

Allow users to update item quantities in their cart
before checkout.

Closes #123
```

## Questions?

Feel free to open an issue for discussions or questions about contributing.

Happy coding! 🚀
