using System;
using System.Drawing;
using System.Collections.Generic;

public class ImageProcessor3 {
    public static void Process(string inPath, string outPath, int threshold, bool preserveAlpha) {
        Bitmap bmp = new Bitmap(inPath);
        Color targetColor = bmp.GetPixel(0, 0); // assume 0,0 is background
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
            
            if (preserveAlpha && c.A == 0) {
                visited[x, y] = true;
                continue;
            }

            if (dr*dr + dg*dg + db*db <= threshold) { 
                visited[x, y] = true;
                bmp.SetPixel(x, y, Color.Transparent);
                
                q.Enqueue(new Point(x + 1, y));
                q.Enqueue(new Point(x - 1, y));
                q.Enqueue(new Point(x, y + 1));
                q.Enqueue(new Point(x, y - 1));
            }
        }
        bmp.Save(outPath, System.Drawing.Imaging.ImageFormat.Png);
        bmp.Dispose();
    }

    public static void MakeFeather() {
        // Feather cursor has a white background. Let's make anything > 150 brightness transparent, EXCEPT we shouldn't use flood fill because we want to completely remove the white box, even if it's not contiguous.
        Bitmap bmp = new Bitmap("c:\\Users\\sgy30\\Downloads\\gayoon_game-main\\gayoon_game-main\\feather_cursor.png");
        int width = bmp.Width;
        int height = bmp.Height;
        
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                Color c = bmp.GetPixel(x,y);
                // If pixel is light, make it transparent
                if (c.R > 200 && c.G > 200 && c.B > 200) {
                    bmp.SetPixel(x, y, Color.Transparent);
                }
            }
        }
        
        Bitmap rBmp = new Bitmap(32, 32);
        Graphics g = Graphics.FromImage(rBmp);
        g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
        g.Clear(Color.Transparent);
        g.DrawImage(bmp, 0, 0, 32, 32);
        g.Dispose();
        bmp.Dispose();
        
        rBmp.Save("c:\\Users\\sgy30\\Downloads\\gayoon_game-main\\gayoon_game-main\\feather_cursor_32.png", System.Drawing.Imaging.ImageFormat.Png);
        rBmp.Dispose();
    }
}
