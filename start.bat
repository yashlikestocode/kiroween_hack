@echo off
echo ========================================
echo  Starting GhostArchive...
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

start "GhostArchive Backend" cmd /k "cd backend && npm run dev"
timeout /t 2 /nobreak > nul
start "GhostArchive Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Both servers starting in separate windows...
echo Close this window or press any key to exit
pause > nul
