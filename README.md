# DJ Downloader Frontend

A modern web application for downloading music from various streaming platforms (Spotify, YouTube, and Apple Music) with format conversion capabilities.

![DJ Downloader Screenshot](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80)

## 🎵 Features

- Multi-platform support:
  - Spotify
  - YouTube
  - Apple Music
- Multiple audio formats:
  - MP3
  - WAV
  - FLAC
- Real-time download progress
- Track metadata display
- Responsive design
- Beautiful animations and transitions

## 🏗️ Architecture

The frontend is built with modern web technologies:

- **React 18**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized builds
- **Tailwind CSS**: For styling and responsive design
- **Axios**: For API communication
- **Lucide React**: For beautiful icons

### Project Structure

```
src/
├── api/          # API integration layer
├── components/   # Reusable UI components
├── config/       # Environment configuration
├── types/        # TypeScript type definitions
├── App.tsx       # Main application component
└── main.tsx      # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_DEFAULT_PLAYER=youtube
VITE_DEFAULT_FORMAT=mp3
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔗 API Integration

The frontend communicates with the backend through RESTful endpoints:

- `/youtube`: YouTube downloads
- `/spotify`: Spotify downloads
- `/apple`: Apple Music downloads

Each endpoint accepts:
- `url`: Track URL
- `format`: Desired output format (mp3/wav/flac)

## 🎨 UI Components

- **LoadingScreen**: Initial loading animation
- **PlayerSelect**: Platform selection dropdown
- **SearchInput**: URL input field
- **FormatSelect**: Audio format selector
- **DownloadButton**: Download trigger with progress indication
