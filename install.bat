@echo off
echo ========================================
echo  GhostArchive Installation Script
echo ========================================
echo.

echo [1/3] Installing root dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Root installation failed
    pause
    exit /b 1
)

echo.
echo [2/3] Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed
    pause
    exit /b 1
)
cd ..

echo.
echo [3/3] Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo  Installation Complete! 
echo ========================================
echo.
echo To start the application:
echo   npm run dev
echo.
echo Or run separately:
echo   Terminal 1: cd backend ^&^& npm run dev
echo   Terminal 2: cd frontend ^&^& npm run dev
echo.
pause
