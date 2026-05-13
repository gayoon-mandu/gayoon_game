
Add-Type -AssemblyName System.Drawing
$sourcePath = "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor.png"
$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)

$minY = $bmp.Height
$maxX = 0
$hotspotX = 0
$hotspotY = 0

# Scan for dark pixels in the top-right quadrant
for ($y = 0; $y -lt ($bmp.Height / 2); $y++) {
    for ($x = ($bmp.Width / 2); $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Assuming background is white/light, dark pixels are feather
        if ($pixel.R -lt 150) {
            # We want the highest X and lowest Y
            # Using a simple heuristic: point that maximizes X - Y
            if (($x - $y) -gt ($maxX - $minY)) {
                $maxX = $x
                $minY = $y
                $hotspotX = $x
                $hotspotY = $y
            }
        }
    }
}

Write-Host "Original Hotspot: $hotspotX, $hotspotY"
$bmp.Dispose()
