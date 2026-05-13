$code = @"
using System;
using System.Drawing;
using System.Collections.Generic;

public class ImageProcessor2 {
    public static void Process(string inPath, string tempPath, string outPath) {
        Bitmap bmp = new Bitmap(inPath);
        Color targetColor = bmp.GetPixel(0, 0);
        int width = bmp.Width;
        int height = bmp.Height;
        
        bool[,] visited = new bool[width, height];
        Queue<Point> q = new Queue<Point>();
        
        q.Enqueue(new Point(0, 0));
        q.Enqueue(new Point(width - 1, 0));
        q.Enqueue(new Point(0, height - 1));
        q.Enqueue(new Point(width - 1, height - 1));
        
        while (q.Count > 0) {
            Point p = q.Dequeue();
            int x = p.X;
            int y = p.Y;
            
            if (x < 0 || x >= width || y < 0 || y >= height) continue;
            if (visited[x, y]) continue;
            
            Color c = bmp.GetPixel(x, y);
            
            int dr = c.R - targetColor.R;
            int dg = c.G - targetColor.G;
            int db = c.B - targetColor.B;
            if (dr*dr + dg*dg + db*db < 20000) { 
                visited[x, y] = true;
                bmp.SetPixel(x, y, Color.Transparent);
                
                q.Enqueue(new Point(x + 1, y));
                q.Enqueue(new Point(x - 1, y));
                q.Enqueue(new Point(x, y + 1));
                q.Enqueue(new Point(x, y - 1));
            }
        }
        bmp.Save(tempPath, System.Drawing.Imaging.ImageFormat.Png);
        bmp.Dispose();
        
        Bitmap tBmp = new Bitmap(tempPath);
        Bitmap rBmp = new Bitmap(32, 32);
        Graphics g = Graphics.FromImage(rBmp);
        g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
        g.Clear(Color.Transparent);
        g.DrawImage(tBmp, 0, 0, 32, 32);
        g.Dispose();
        tBmp.Dispose();
        
        rBmp.Save(outPath, System.Drawing.Imaging.ImageFormat.Png);
        rBmp.Dispose();
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageProcessor2]::Process("c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor.png", "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor_temp.png", "c:\Users\sgy30\Downloads\gayoon_game-main\gayoon_game-main\feather_cursor_32.png")
