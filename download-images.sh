#!/bin/bash

# FoodMunch Image Download Script
# This script helps you download placeholder images for drinks and extras

echo "🍹 FoodMunch Image Setup"
echo "========================"

# Create directories
mkdir -p public/assets/drinks
mkdir -p public/assets/extras

echo "✅ Created directories"

# Function to download image with curl
download_image() {
    local url=$1
    local filename=$2
    local description=$3
    
    echo "📥 Downloading $description..."
    curl -L -o "$filename" "$url" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ Downloaded: $filename"
    else
        echo "❌ Failed to download: $filename"
    fi
}

echo ""
echo "🍹 Downloading drink images..."

# Download drink images (using placeholder URLs - replace with actual image URLs)
download_image "https://via.placeholder.com/400x400/FF0000/FFFFFF?text=Coca-Cola" "public/assets/drinks/coke.jpg" "Coca-Cola"
download_image "https://via.placeholder.com/400x400/0066CC/FFFFFF?text=Pepsi" "public/assets/drinks/pepsi.jpg" "Pepsi"
download_image "https://via.placeholder.com/400x400/FF6600/FFFFFF?text=Fanta" "public/assets/drinks/fanta.jpg" "Fanta Orange"
download_image "https://via.placeholder.com/400x400/00CC00/FFFFFF?text=Sprite" "public/assets/drinks/sprite.jpg" "Sprite"
download_image "https://via.placeholder.com/400x400/8B4513/FFFFFF?text=Malta" "public/assets/drinks/maltina.jpg" "Malta"
download_image "https://via.placeholder.com/400x400/000000/FFFFFF?text=Bigi+Cola" "public/assets/drinks/bigi-cola.jpg" "Bigi Cola"
download_image "https://via.placeholder.com/400x400/FF69B4/FFFFFF?text=Bigi+Tropical" "public/assets/drinks/bigi-tropical.jpg" "Bigi Tropical"
download_image "https://via.placeholder.com/400x400/32CD32/FFFFFF?text=La+Casera" "public/assets/drinks/lacasera.jpg" "La Casera Apple"
download_image "https://via.placeholder.com/400x400/8B4513/FFFFFF?text=Malta+Guinness" "public/assets/drinks/malta-guinness.jpg" "Malta Guinness"

echo ""
echo "🍖 Downloading extras images..."

# Download extras images
download_image "https://via.placeholder.com/400x400/D2691E/FFFFFF?text=Chicken" "public/assets/extras/chicken.jpg" "Extra Chicken"
download_image "https://via.placeholder.com/400x400/F5F5DC/000000?text=Rice" "public/assets/extras/rice.jpg" "Extra Rice"
download_image "https://via.placeholder.com/400x400/FFD700/000000?text=Plantain" "public/assets/extras/plantain.jpg" "Extra Plantain"
download_image "https://via.placeholder.com/400x400/4682B4/FFFFFF?text=Fish" "public/assets/extras/fish.jpg" "Extra Fish"
download_image "https://via.placeholder.com/400x400/708090/FFFFFF?text=Croaker" "public/assets/extras/croaker.jpg" "Croaker Fish"
download_image "https://via.placeholder.com/400x400/8B0000/FFFFFF?text=Beef" "public/assets/extras/beef.jpg" "Extra Beef"

echo ""
echo "🎯 Creating fallback placeholder images..."
download_image "https://via.placeholder.com/400x400/CCCCCC/666666?text=Food+Item" "public/assets/placeholder-food.jpg" "Food Placeholder"
download_image "https://via.placeholder.com/400x400/87CEEB/FFFFFF?text=Drink" "public/assets/placeholder-drink.jpg" "Drink Placeholder"

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Replace placeholder images with real product photos"
echo "2. Use the image-download-guide.md for detailed instructions"
echo "3. Optimize images for web (compress and resize)"
echo ""
echo "📁 Image locations:"
echo "   • Drinks: public/assets/drinks/"
echo "   • Extras: public/assets/extras/"
echo "   • Placeholders: public/assets/"
