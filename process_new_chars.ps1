Add-Type -AssemblyName System.Drawing

function Remove-Checkerboard {
    param(
        [string]$InputPath,
        [string]$OutputPath
    )
    
    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
    $g = [System.Drawing.Graphics]::FromImage($newBmp)
    $g.Clear([System.Drawing.Color]::Transparent)
    
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        for ($x = 0; $x -lt $bmp.Width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            
            # Target the typical checkerboard gray/white colors
            # In these JPGs, they are around 190-210 (darker) and 240-255 (lighter)
            $isGray = [Math]::Abs($pixel.R - $pixel.G) -lt 15 -and [Math]::Abs($pixel.R - $pixel.B) -lt 15
            $isBright = $pixel.R -gt 180 -and $pixel.G -gt 180 -and $pixel.B -gt 180
            
            # Simple heuristic: if it's very gray and bright, it's likely the background
            # For these specific character images (skin tones, clothes), they have more color/saturation
            if ($isGray -and $isBright) {
                # Skip background
            } else {
                $newBmp.SetPixel($x, $y, $pixel)
            }
        }
    }
    
    $newBmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $newBmp.Dispose()
    $g.Dispose()
}

$brainDir = "C:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\.." # Adjust based on knowledge
# Actually, use the absolute paths from the previous ls command
$ireneInput = "C:\Users\sgy30\.gemini\antigravity\brain\945f2589-dd94-4ec1-86c6-023940ba1d6b\media__1778688845315.jpg"
$clareInput = "C:\Users\sgy30\.gemini\antigravity\brain\945f2589-dd94-4ec1-86c6-023940ba1d6b\media__1778688896989.jpg"

Remove-Checkerboard -InputPath $ireneInput -OutputPath "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02.png"
Remove-Checkerboard -InputPath $clareInput -OutputPath "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01.png"
