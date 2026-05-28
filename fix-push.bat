@echo off
echo Fixing Git push timeout issue...

REM Increase buffer size and timeout
git config http.postBuffer 524288000
git config http.timeout 600

REM Try pushing in smaller chunks
echo Pushing changes...
git push origin main --force

echo Done!
pause
