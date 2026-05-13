Add-Type -TypeDefinition @"using System;
using System.Drawing;

public class Checker {
    public static void Run() {
        Bitmap b1 = new Bitmap("c:\\Users\\sgy30\\Downloads\\gayoon_game-main\\gayoon_game-main\\character01.png");
        Color c1 = b1.GetPixel(0,0);
        Console.WriteLine("char1 bg: " + c1.R + "," + c1.G + "," + c1.B);
        b1.Dispose();
        
        Bitmap b2 = new Bitmap("c:\\Users\\sgy30\\Downloads\\gayoon_game-main\\gayoon_game-main\\character02.png");
        Color c2 = b2.GetPixel(0,0);
        Console.WriteLine("char2 bg: " + c2.R + "," + c2.G + "," + c2.B);
        b2.Dispose();
        
        Bitmap b3 = new Bitmap("c:\\Users\\sgy30\\Downloads\\gayoon_game-main\\gayoon_game-main\\feather_cursor_32.png");
        Color c3 = b3.GetPixel(0,0);
        Console.WriteLine("feather_cursor_32 bg: " + c3.R + "," + c3.G + "," + c3.B + " alpha:" + c3.A);
        b3.Dispose();
    }
}"@ -ReferencedAssemblies System.Drawing
[Checker]::Run()
