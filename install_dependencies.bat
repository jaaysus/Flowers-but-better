@echo off
echo Checking internet connection...
ping -n 1 www.google.com >nul 2>&1
if errorlevel 1 (
    echo No internet connection detected. Please check your connection and try again.
    exit /b
)

echo Internet connection detected.
if not exist "package.json" (
    echo package.json not found. Ensure you are in the correct directory.
    exit /b
)

echo Reading dependencies from package.json...
for /f "tokens=*" %%D in ('node -e "const fs = require('fs'); const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); console.log(Object.keys(pkg.dependencies || {}).join(' '));"') do set deps=%%D

if "%deps%"=="" (
    echo No dependencies found in package.json.
    exit /b
)

for %%D in (%deps%) do (
    echo Installing %%D...
    npm install %%D >nul 2>&1
    if errorlevel 1 (
        echo Failed to install %%D. Check your internet connection or package.json.
        exit /b
    )
    call :progress_bar
)

echo All dependencies installed successfully.
exit /b

:progress_bar
setlocal enabledelayedexpansion
for /L %%i in (1,1,10) do (
    set /p "=." <nul
    ping -n 1 127.0.0.1 >nul 2>&1
)
echo.
endlocal
exit /b
