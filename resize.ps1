Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor.png')
$bmp = new-object System.Drawing.Bitmap 32,32
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, 32, 32)
$g.Dispose()
$img.Dispose()
$bmp.Save('c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor_32.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
