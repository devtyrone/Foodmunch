# Image Download Guide for FoodMunch

## Required Images

### Drinks Images (save to: `/public/assets/drinks/`)

1. **coke.jpg** - Coca-Cola bottle/can
   - Search: "Coca Cola bottle product image"
   - Suggested size: 400x400px or higher
   - Format: JPG

2. **pepsi.jpg** - Pepsi bottle/can
   - Search: "Pepsi bottle product image"
   - Suggested size: 400x400px or higher
   - Format: JPG

3. **fanta.jpg** - Fanta Orange bottle/can
   - Search: "Fanta Orange bottle product image"
   - Suggested size: 400x400px or higher
   - Format: JPG

4. **sprite.jpg** - Sprite bottle/can
   - Search: "Sprite bottle product image"
   - Suggested size: 400x400px or higher
   - Format: JPG

5. **maltina.jpg** - Malta/Maltina bottle (for the new "Malta" item)
   - Search: "Maltina malt drink bottle Nigeria"
   - Suggested size: 400x400px or higher
   - Format: JPG

6. **bigi-cola.jpg** - Bigi Cola bottle/can
   - Search: "Bigi Cola Nigeria bottle"
   - Suggested size: 400x400px or higher
   - Format: JPG

7. **bigi-tropical.jpg** - Bigi Tropical
   - Search: "Bigi Tropical drink Nigeria"
   - Suggested size: 400x400px or higher
   - Format: JPG

8. **lacasera.jpg** - La Casera Apple
   - Search: "La Casera Apple drink Nigeria"
   - Suggested size: 400x400px or higher
   - Format: JPG

9. **malta-guinness.jpg** - Malta Guinness
   - Search: "Malta Guinness bottle Nigeria"
   - Suggested size: 400x400px or higher
   - Format: JPG

### Extras Images (save to: `/public/assets/extras/`)

1. **chicken.jpg** - Grilled/cooked chicken pieces
   - Search: "grilled chicken pieces food photography"
   - Suggested size: 400x400px or higher
   - Format: JPG

2. **rice.jpg** - Steamed white rice
   - Search: "steamed white rice bowl food photography"
   - Suggested size: 400x400px or higher
   - Format: JPG

3. **plantain.jpg** - Fried plantain slices
   - Search: "fried plantain slices Nigerian food"
   - Suggested size: 400x400px or higher
   - Format: JPG

4. **fish.jpg** - Cooked fish portion
   - Search: "grilled fish Nigerian food photography"
   - Suggested size: 400x400px or higher
   - Format: JPG

5. **croaker.jpg** - Croaker fish
   - Search: "croaker fish grilled Nigerian cuisine"
   - Suggested size: 400x400px or higher
   - Format: JPG

6. **beef.jpg** - Beef pieces/chunks
   - Search: "beef chunks Nigerian food photography"
   - Suggested size: 400x400px or higher
   - Format: JPG

## How to Download from Google Images

### Method 1: Google Images Search
1. Go to [Google Images](https://images.google.com)
2. Search for the item using the suggested search terms above
3. Click on "Tools" → "Size" → "Large" for better quality
4. Click on "Tools" → "Usage Rights" → "Creative Commons licenses" (for safer usage)
5. Right-click on the image → "Save image as..."
6. Save with the exact filename specified above

### Method 2: Using Browser Developer Tools (for higher quality)
1. Right-click on the image in Google Images
2. Select "Inspect" or "Inspect Element"
3. Look for the `<img>` tag with the highest resolution URL
4. Copy the URL and open it in a new tab
5. Right-click → "Save image as..."

### Method 3: Unsplash/Pexels (Free Stock Photos)
For food photography, you can also use:
- [Unsplash](https://unsplash.com) - Search for food items
- [Pexels](https://pexels.com) - Search for beverages and food

## Image Optimization Tips

1. **Resize images** to around 400x400px to 800x800px for web optimization
2. **Compress images** using tools like:
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com) (Mac)
   - Online image compressors

3. **Maintain aspect ratio** - square images work best for product displays

## Alternative: AI-Generated Images

If you prefer AI-generated images, you can use:
- **DALL-E 2/3** - "Product photo of [item name] on white background"
- **Midjourney** - "/imagine product photography [item name] white background"
- **Stable Diffusion** - "Professional product photo of [item name]"

## Quick Setup Commands

After downloading all images, verify they're in the correct locations:

```bash
# Check drinks directory
ls -la /Users/mac/Downloads/Foodmunch/public/assets/drinks/

# Check extras directory  
ls -la /Users/mac/Downloads/Foodmunch/public/assets/extras/
```

## Fallback Images

If any image fails to load, the app will show a placeholder. You can create a generic placeholder:
- `/public/assets/placeholder-drink.jpg`
- `/public/assets/placeholder-food.jpg`
