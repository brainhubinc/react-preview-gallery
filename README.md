# 🖼️  react-preview-gallery

[![npm](https://img.shields.io/npm/v/react-preview-gallery)](https://www.npmjs.com/package/react-preview-gallery)
[![downloads](https://img.shields.io/npm/dt/react-preview-gallery)](https://www.npmjs.com/package/react-preview-gallery)

<p><img src="https://github.com/user-attachments/assets/a46db743-76f8-4fc5-976c-0c6cf74a28e7" width="900"></p>
A responsive and touch-friendly gallery component for React with image/video support and interactive navigation.

## Features ✨

- **Multi-format support** - Displays both images and videos
- **Touch gestures** - Swipe navigation for mobile devices
- **Hover navigation** - Desktop-friendly hover controls
- **Lazy loading** - Efficient image loading with `LazyImage`
- **Customizable** - Control dimensions and styling
- **Accessibility** - Proper alt texts and semantic markup

## Installation 📦

```bash
npm install react-preview-gallery
# or
yarn add react-preview-gallery
```

## Quick start 🚀

### 🖼️ Only images 
```jsx
import Gallery from "react-preview-gallery";
import "react-preview-gallery/style.css";

const images = [
  { src: "image1.jpg", alt: "Description 1" },
  { src: "image2.jpg", alt: "Description 2" },
];

function App() {
  return (
    <Gallery 
      imagesArr={images}
      description="product name"
    />
  );
}
```
### 🎥 With video 

```jsx
<Gallery
  imagesArr={images}
  isShowVideo={true}
  videoFile="video.mp4"
/>
```

## Props ⚙️

|       Prop         |   Type   |  Default  |                Description                  |
|:-------------------|:--------:|:---------:|:--------------------------------------------|
| `imagesArr`        | Array    | required  | Array of image objects with `src` and `alt` |
| `description`      | String   | `""`      | Metadata description                        |
| `isShowVideo`      | Boolean  | `false`   | Enable video display                        |
| `videoFile`        | String   | `""`      | Video source URL                            |
| `dotsClassName`    | String   | `""`      | Custom class for navigation dots            |
| `sectorsClassName` | String   | `""`      | Custom class for hover sectors              |

## License 📄
MIT © [Kostya Skakodub]
