# Color Name

Color Name is a web application that displays matching or similar CSS and JIS color names based on a hexadecimal RGB input. It shows both the color name and a swatch of the color.

## Features

- Input a hexadecimal RGB code (e.g., #F00 or #FF0000).
- Display similar color names from CSS and JIS standards.
- Show actual color swatches for visual confirmation.
- Reverse lookup functionality for color codes.

## Technologies Used

- **React** for the user interface.
- **Vite** as the build tool.
- **Material-UI (MUI)** for UI components.
- Deployed via **GitHub Pages** using GitHub Actions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HiroshiOkada/color-name.git
   ```
2. Navigate into the project directory:
   ```bash
   cd color-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the project locally in development mode:
```bash
npm run dev
```
This will start the Vite development server.

## Production Build

To create a production build:
```bash
npm run build
```

## Deployment

The project is deployed to GitHub Pages automatically via GitHub Actions. Simply push your changes to the master branch and the deployment workflow will run.

Access the deployed application at: [https://hiroshiokada.github.io/color-name/](https://hiroshiokada.github.io/color-name/)

## License

This project is licensed under the MIT License.
