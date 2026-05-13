$env:Path += ";C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Users\sgy30\AppData\Local\Programs\Git\cmd"

git config user.name "gayoon-mandu"
git config user.email "gayoon@example.com"

git add .
git commit -m "Update game features: feather cursor, taxi transition, ui polish"
git branch -M main

Write-Host "Pushing to GitHub... A browser window may open for you to log in."
git push -u origin main
