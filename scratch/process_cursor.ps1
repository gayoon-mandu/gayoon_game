
Add-Type -AssemblyName System.Drawing
$sourcePath = "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor.png"
$outputPath = "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor_v2.png"

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $bmp.Width
$height = $bmp.Height

# Rotate 90 degrees Left (270 degrees Clockwise)
$bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)

# Resize to 64x64
$newSize = 64
$newBmp = New-Object System.Drawing.Bitmap($newSize, $newSize)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bmp, 0, 0, $newSize, $newSize)

# If the image has a white background, make it transparent
# (Assuming it's not already transparent, as seen in some previews)
# $newBmp.MakeTransparent([System.Drawing.Color]::White)

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$newBmp.Dispose()
$bmp.Dispose()

Write-Host "Processed image saved to $outputPath"
