@echo off
REM Teleprompter Launcher
REM Opens the teleprompter in Chrome/Edge app mode for the best experience

setlocal

REM Get the directory where this batch file is located
set "SCRIPT_DIR=%~dp0"
set "HTML_FILE=%SCRIPT_DIR%index.html"

REM Try to launch in Chrome first (best PiP support)
where chrome.exe >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    start "" chrome.exe --app="file:///%HTML_FILE:\=/%" --new-window
    exit /b 0
)

REM If Chrome not found, try Edge
where msedge.exe >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    start "" msedge.exe --app="file:///%HTML_FILE:\=/%" --new-window
    exit /b 0
)

REM If neither Chrome nor Edge found, try finding Chrome in common locations
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML_FILE:\=/%" --new-window
    exit /b 0
)

if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML_FILE:\=/%" --new-window
    exit /b 0
)

REM If still not found, try Edge in common location
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
    start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="file:///%HTML_FILE:\=/%" --new-window
    exit /b 0
)

REM Last resort: open in default browser
echo Chrome or Edge not found. Opening in default browser...
echo Note: Picture-in-Picture requires Chrome or Edge!
timeout /t 3
start "" "%HTML_FILE%"

endlocal
