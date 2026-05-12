$code = Get-Content -Path "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\process_imgs.cs" -Raw
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageProcessor3]::Process("c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01.png", "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01_t.png", 500, $false)
[ImageProcessor3]::Process("c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02.png", "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02_t.png", 500, $false)
[ImageProcessor3]::MakeFeather()

Move-Item -Path "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01_t.png" -Destination "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character01.png" -Force
Move-Item -Path "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02_t.png" -Destination "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\character02.png" -Force
