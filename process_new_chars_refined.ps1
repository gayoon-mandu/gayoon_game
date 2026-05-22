Add-Type -AssemblyName System.Drawing

function Remove-Checkerboard-Refined {
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
            
            # More aggressive threshold for gray/white edges
            $isGray = [Math]::Abs($pixel.R - $pixel.G) -lt 25 -and [Math]::Abs($pixel.R - $pixel.B) -lt 25
            $isBright = $pixel.R -gt 160 -and $pixel.G -gt 160 -and $pixel.B -gt 160
            
            # If it's likely background or a "halo" edge pixel
            if ($isGray -and $isBright) {
                # Skip
            } else {
                $newBmp.SetPixel($x, $y, $pixel)
            }
        }
    }
    
    # Simple "Erode" pass to remove single pixel borders
    $finalBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
    for ($y = 1; $y -lt ($bmp.Height - 1); $y++) {
        for ($x = 1; $x -lt ($bmp.Width - 1); $x++) {
            $pixel = $newBmp.GetPixel($x, $y)
            if ($pixel.A -gt 0) {
                # Check neighbors. If many neighbors are transparent, this is an edge.
                $transparentNeighbors = 0
                for ($ny = -1; $ny -le 1; $ny++) {
                    for ($nx = -1; $nx -le 1; $nx++) {
                        if ($newBmp.GetPixel($x + $nx, $y + $ny).A -eq 0) {
                            $transparentNeighbors++
                        }
                    }
                }
                # If it's an edge pixel (at least one transparent neighbor), we can optionally discard it or keep it.
                # To remove "white lines", we discard pixels that are still "too bright" at the edges.
                if ($transparentNeighbors -gt 0 -and $pixel.R -gt 140 -and $pixel.G -gt 140 -and $pixel.B -gt 140) {
                    # Discard edge "halo"
                } else {
                    $finalBmp.SetPixel($x, $y, $pixel)
                }
            }
        }
    }
    
    $finalBmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $newBmp.Dispose()
    $finalBmp.Dispose()
    $g.Dispose()
}

$ireneInput = "C:\Users\sgy30\.gemini\antigravity\brain\945f2589-dd94-4ec1-86c6-023940ba1d6b\media__1778688845315.jpg"
$clareInput = "C:\Users\sgy30\.gemini\antigravity\brain\945f2589-dd94-4ec1-86c6-023940ba1d6b\media__1778688896989.jpg"

Remove-Checkerboard-Refined -InputPath $ireneInput -OutputPath "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02.png"
Remove-Checkerboard-Refined -InputPath $clareInput -OutputPath "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01.png"
