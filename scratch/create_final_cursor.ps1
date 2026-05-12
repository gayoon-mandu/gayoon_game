
Add-Type -AssemblyName System.Drawing
$sourcePath = "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor.png"
$outputPath = "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor_final.png"

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $bmp.Width
$height = $bmp.Height

# Rotation 90 deg Left (CCW) is Rotate270FlipNone
$bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)

# Resize to 32x32
$newSize = 32
$newBmp = New-Object System.Drawing.Bitmap($newSize, $newSize)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bmp, 0, 0, $newSize, $newSize)

# Make background transparent. Assuming white/near-white.
# Some artifacts might have gray-ish edges, but MakeTransparent(White) usually works for these icons.
$newBmp.MakeTransparent([System.Drawing.Color]::White)

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$newBmp.Dispose()
$bmp.Dispose()

Write-Host "Final image saved to $outputPath"
