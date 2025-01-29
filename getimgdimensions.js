import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Supported image file extensions
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.tiff'];

// Function to get image dimensions
async function getImageDimensions(filePath) {
    try {
        const metadata = await sharp(filePath).metadata();
        return { width: metadata.width, height: metadata.height };
    } catch (error) {
        console.error(`Could not process ${filePath}: ${error.message}`);
        return null;
    }
}

// Function to process all images in the current directory
async function processImagesInDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const ext = path.extname(file).toLowerCase();

        if (supportedExtensions.includes(ext)) {
            const dimensions = await getImageDimensions(filePath);
            if (dimensions) {
                console.log(`File: ${file}, Width: ${dimensions.width}, Height: ${dimensions.height}`);
            }
        }
    }
}

// Get the current directory
const currentDirectory = process.cwd();

// Process images in the current directory
processImagesInDirectory(currentDirectory)
    .then(() => console.log('Done processing images.'))
    .catch((err) => console.error('Error processing images:', err));